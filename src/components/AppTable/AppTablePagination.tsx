import type { TablePaginationProps } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';

type AppTablePaginationProps = Omit<TablePaginationProps, 'component' | 'labelRowsPerPage'>;

const AppTablePagination = ({ count, ...props }: AppTablePaginationProps) => {
	if (count === 0) {
		return null;
	}

	return <TablePagination component="div" labelRowsPerPage="Строк:" count={count} {...props} />;
};

export default AppTablePagination;
export type { AppTablePaginationProps };
