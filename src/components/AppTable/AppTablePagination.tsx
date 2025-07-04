import type { TablePaginationProps } from '@mui/material';

import { memo } from 'react';
import TablePagination from '@mui/material/TablePagination';

type AppTablePaginationProps = Omit<TablePaginationProps, 'component' | 'labelRowsPerPage'>;

const AppTablePagination = memo(({ count, ...props }: AppTablePaginationProps) => {
	if (count === 0) {
		return null;
	}

	return <TablePagination component="div" labelRowsPerPage="Строк:" count={count} {...props} />;
});

AppTablePagination.displayName = 'AppTablePagination';

export default AppTablePagination;
