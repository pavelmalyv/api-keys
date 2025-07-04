import type { TablePaginationProps } from '@mui/material';

import { memo } from 'react';
import TablePagination from '@mui/material/TablePagination';

const AppTablePagination = memo(
	({ count, ...props }: Omit<TablePaginationProps, 'component' | 'labelRowsPerPage'>) => {
		if (count === 0) {
			return null;
		}

		return <TablePagination component="div" labelRowsPerPage="Строк:" count={count} {...props} />;
	},
);

AppTablePagination.displayName = 'AppTablePagination';

export default AppTablePagination;
