import type { TableContainerProps } from '@mui/material';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import AppTableHead from './AppTableHead';
import AppTableBody from './AppTableBody';

type AppTableTableProps = TableContainerProps;

const AppTableTable = ({ children, ...props }: AppTableTableProps) => {
	return (
		<TableContainer {...props}>
			<Table>{children}</Table>
		</TableContainer>
	);
};

AppTableTable.Head = AppTableHead;
AppTableTable.Body = AppTableBody;

export default AppTableTable;
export type { AppTableTableProps };
