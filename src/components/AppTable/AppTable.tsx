import type {
	HeadData,
	TableSort,
	RenderHeadColumns,
	BodyData,
	RenderBodyRow,
	PaginationOptions,
} from './types';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import AppTableHead from './AppTableHead';
import AppTableBody from './AppTableBody';
import AppTablePagination from './AppTablePagination';
import { useMemo } from 'react';

interface AppTableProps<T extends string> {
	headData: HeadData<T>;
	tableSort: TableSort;
	bodyData: BodyData<T>;
	renderHeadColumns?: RenderHeadColumns;
	renderBodyRow?: RenderBodyRow;
	pagination?: PaginationOptions;
	children?: React.ReactNode;
}

const AppTable = <T extends string>({
	headData,
	tableSort,
	bodyData,
	renderHeadColumns,
	renderBodyRow,
	pagination,
	children,
}: AppTableProps<T>) => {
	const headDataRended = useMemo(
		() => renderHeadColumns?.(headData) ?? headData,
		[headData, renderHeadColumns],
	);

	return (
		<TableContainer>
			<Table>
				<AppTableHead data={headDataRended} tableSort={tableSort} />
				<AppTableBody headData={headDataRended} bodyData={bodyData} renderBodyRow={renderBodyRow} />
			</Table>
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
				{children}
				{pagination && <AppTablePagination options={pagination} />}
			</Box>
		</TableContainer>
	);
};
export default AppTable;
