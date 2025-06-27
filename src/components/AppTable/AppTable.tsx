import type { BoxProps } from '@mui/material';
import type { AppTableHead, TableBodyRows } from './AppTable.types';
import type { Override } from '@/types';

import Box from '@mui/material/Box';
import AppTableTable from './AppTableTable';
import AppTablePagination from './AppTablePagination';
import { BodyProvider, HeadProvider } from './AppTableContext';

type AppTableOwnProps<T extends string> = {
	head: AppTableHead<T>;
	body: TableBodyRows<T>;
};

type AppTableProps<T extends string> = Override<BoxProps, AppTableOwnProps<T>>;

const AppTable = <T extends string>({ head, body, children, ...props }: AppTableProps<T>) => {
	return (
		<Box {...props}>
			<HeadProvider value={head}>
				<BodyProvider value={body}>{children}</BodyProvider>
			</HeadProvider>
		</Box>
	);
};

AppTable.Table = AppTableTable;
AppTable.Pagination = AppTablePagination;

export default AppTable;
export type { AppTableProps };
