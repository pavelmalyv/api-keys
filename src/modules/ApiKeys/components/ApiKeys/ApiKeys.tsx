import type { SortOrder, SortType } from '@/types';
import type { DataApiKey } from '../../types';

import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { selectApiKeysBySort } from '../../store/apiKeysSelectors';
import { addApiKey } from '../../store/apiKeysSlice';
import { v4 as uuid } from 'uuid';
import { getNowTimestamp } from '../../utils/date';

import Section, { type SectionProps } from '@UI/Section';
import AddForm, { type AddFormProps } from '../AddForm/AddForm';
import AppTable, { type AppTablePaginationProps } from '@/components/AppTable';
import Box from '@mui/material/Box';
import DeleteDisabledApiKeys from '../DeleteDisabledApiKeys';
import useTableBodyRender from '../../hooks/useTableBodyRender';

type ApiKeysProps = {
	titleVariant?: SectionProps['titleVariant'];
	titleComponent?: SectionProps['titleComponent'];
	titleFormComponent?: AddFormProps['titleComponent'];
};

type Head = ReadonlyArray<{
	id: DataApiKey | 'delete';
	label: string;
	sortType?: SortType;
}>;

type SortState = {
	sortBy: DataApiKey;
	order: SortOrder;
	type: SortType;
};

const HEAD: Head = [
	{
		id: 'name',
		label: 'Название',
		sortType: 'string',
	},
	{
		id: 'key',
		label: 'Ключ',
	},
	{
		id: 'createdAt',
		label: 'Создан',
		sortType: 'date',
	},
	{
		id: 'isActive',
		label: 'Активен',
	},
	{
		id: 'delete',
		label: '',
	},
];

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

const PAGINATION_SX = {
	'& .MuiTablePagination-toolbar': {
		pl: 0,
	},
};

const ApiKeys = ({ titleVariant, titleComponent, titleFormComponent }: ApiKeysProps) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
	const [sort, setSort] = useState<SortState>({
		sortBy: 'createdAt',
		order: 'desc',
		type: 'date',
	});

	const { items: apiKeysItems, total: apiKeysTotal } = useAppSelector((state) =>
		selectApiKeysBySort(state, sort.sortBy, sort.order, sort.type, rowsPerPage * page, rowsPerPage),
	);

	const apiKeysRender = useTableBodyRender(apiKeysItems);
	const dispatch = useAppDispatch();

	const handleAddApiKey: AddFormProps['onSubmit'] = useCallback(
		(data, reset) => {
			dispatch(
				addApiKey({
					id: uuid(),
					name: data.nameApiKey,
					key: uuid(),
					createdAt: getNowTimestamp(),
				}),
			);

			reset();
		},
		[dispatch],
	);

	const handleSortChange = useCallback(
		({ sortBy, order, type }: { sortBy: string; order: SortOrder; type: SortType }) =>
			setSort({ sortBy: sortBy as DataApiKey, order: order === 'asc' ? 'desc' : 'asc', type }),
		[],
	);

	const handlePageChange = useCallback<AppTablePaginationProps['onPageChange']>(
		(_, page) => setPage(page),
		[],
	);

	const handleRowsPerPageChange = useCallback<
		NonNullable<AppTablePaginationProps['onRowsPerPageChange']>
	>((e) => setRowsPerPage(Number(e.target.value)), []);

	return (
		<Section titleText="API-ключи" titleVariant={titleVariant} titleComponent={titleComponent}>
			<AddForm titleComponent={titleFormComponent} onSubmit={handleAddApiKey} />

			<AppTable head={HEAD} body={apiKeysRender}>
				<AppTable.Table>
					<AppTable.Table.Head
						isSortable={true}
						orderBy={sort?.sortBy ?? null}
						sortOrder={sort?.order ?? null}
						onSortChange={handleSortChange}
					/>
					<AppTable.Table.Body />
				</AppTable.Table>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: { xs: 'flex-start', md: 'center' },
						flexDirection: { xs: 'column-reverse', md: 'row' },
						gap: [2, 1.75],
						mt: 2,
					}}
				>
					<DeleteDisabledApiKeys />

					<AppTable.Pagination
						page={page}
						count={apiKeysTotal}
						rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
						rowsPerPage={rowsPerPage}
						onPageChange={handlePageChange}
						onRowsPerPageChange={handleRowsPerPageChange}
						sx={PAGINATION_SX}
					/>
				</Box>
			</AppTable>
		</Section>
	);
};

export default ApiKeys;
export type { ApiKeysProps };
