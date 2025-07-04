import type { AppTableHead, TableBodyRows } from './AppTable.types';

import Box from '@mui/material/Box';
import AppTableContainer from './AppTableContainer';
import AppTablePagination from './AppTablePagination';
import { BodyProvider, HeadProvider } from './AppTableContext';

type AppTableProps<T extends string> = {
	head: AppTableHead<T>;
	body: TableBodyRows<T>;
	children: React.ReactNode;
};

const AppTable = <T extends string>({ head, body, children }: AppTableProps<T>) => {
	return (
		<Box>
			<HeadProvider value={head}>
				<BodyProvider value={body}>{children}</BodyProvider>
			</HeadProvider>
		</Box>
	);
};

AppTable.Container = AppTableContainer;
AppTable.Pagination = AppTablePagination;

export default AppTable;
