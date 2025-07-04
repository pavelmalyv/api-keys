import type { TableContainerProps } from '@mui/material';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import AppTableHead from './AppTableHead';
import AppTableBody from './AppTableBody';

type AppTableContainerProps = TableContainerProps;

const AppTableContainer = ({ children, ...props }: AppTableContainerProps) => {
	return (
		<TableContainer {...props}>
			<Table>{children}</Table>
		</TableContainer>
	);
};

AppTableContainer.Head = AppTableHead;
AppTableContainer.Body = AppTableBody;

export default AppTableContainer;
