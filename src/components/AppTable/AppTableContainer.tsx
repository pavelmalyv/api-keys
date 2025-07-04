import type { TableContainerProps } from '@mui/material';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import AppTableHead from './AppTableHead';
import AppTableBody from './AppTableBody';

const AppTableContainer = ({ children, ...props }: TableContainerProps) => {
	return (
		<TableContainer {...props}>
			<Table>{children}</Table>
		</TableContainer>
	);
};

AppTableContainer.Head = AppTableHead;
AppTableContainer.Body = AppTableBody;

export default AppTableContainer;
