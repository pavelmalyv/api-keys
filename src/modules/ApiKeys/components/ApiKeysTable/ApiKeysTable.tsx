import type { SortOrder, SortType } from '@shared/types';
import type { DataApiKey } from '@modules/ApiKeys/types';

import AppTable, { type RenderBodyRow, type RenderHeadColumns } from '@components/AppTable';
import { useCallback, useMemo, useState } from 'react';
import { selectApiKeysBySort } from '@modules/ApiKeys/store/apiKeysSelectors';
import { useAppSelector } from '@shared/store/hooks';
import { getDisplayDateForTimestamp } from '@modules/ApiKeys/utils/date';
import { Box } from '@mui/material';

import DeleteDisabledApiKeys from '../DeleteDisabledApiKeys';
import ApiKeySwitch from '../ApiKeySwitch';
import ApiKeyView from '../ApiKeyView';
import DeleteApiKey from '../DeleteApiKey';

const HEAD: {
	id: DataApiKey;
	label: string;
	sortType?: SortType;
}[] = [
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
];

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

const ApiKeysTable = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);
	const [sort, setSort] = useState<{
		sortBy: DataApiKey;
		order: SortOrder;
		sortType: SortType;
	}>({
		sortBy: 'createdAt',
		order: 'desc',
		sortType: 'date',
	});

	const { items: apiKeysItems, total: apiKeysTotal } = useAppSelector((state) =>
		selectApiKeysBySort(
			state,
			sort.sortBy,
			sort.order,
			sort.sortType,
			rowsPerPage * page,
			rowsPerPage,
		),
	);

	const handleSortChange = useCallback(
		(sortBy: string, currentOrder: SortOrder, sortType: SortType) =>
			setSort({
				sortBy: sortBy as DataApiKey,
				order: currentOrder === 'asc' ? 'desc' : 'asc',
				sortType,
			}),
		[],
	);

	const handlePageChange = useCallback((_: unknown, page: number) => setPage(page), []);

	const handleRowsPerPageChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setRowsPerPage(Number(e.target.value)),
		[],
	);

	const renderBodyRow = useCallback<RenderBodyRow>(
		(row) => ({
			...row,
			createdAt: getDisplayDateForTimestamp(Number(row.createdAt)),
			name: <Box sx={{ overflowWrap: 'anywhere', maxWidth: 300 }}>{row.name}</Box>,
			isActive: <ApiKeySwitch id={row.id} isActive={row.isActive === true} />,
			key: <ApiKeyView apiKey={String(row.key)} />,
			delete: <DeleteApiKey id={row.id} />,
		}),
		[],
	);

	const renderHeadColumns = useCallback<RenderHeadColumns>(
		(columns) =>
			columns.concat({
				id: 'delete',
				label: '',
			}),
		[],
	);

	const tableSort = useMemo(
		() => ({
			sortBy: sort.sortBy,
			order: sort.order,
			onChange: handleSortChange,
		}),
		[sort, handleSortChange],
	);

	const pagination = useMemo(
		() => ({
			page,
			count: apiKeysTotal,
			rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
			rowsPerPage: rowsPerPage,
			onPageChange: handlePageChange,
			onRowsPerPageChange: handleRowsPerPageChange,
		}),
		[page, apiKeysTotal, rowsPerPage, handlePageChange, handleRowsPerPageChange],
	);

	return (
		<AppTable
			tableSort={tableSort}
			headData={HEAD}
			bodyData={apiKeysItems}
			renderHeadColumns={renderHeadColumns}
			renderBodyRow={renderBodyRow}
			pagination={pagination}
		>
			<DeleteDisabledApiKeys />
		</AppTable>
	);
};
export default ApiKeysTable;
