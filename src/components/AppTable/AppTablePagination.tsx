import type { PaginationOptions } from './types';

import { memo } from 'react';
import TablePagination from '@mui/material/TablePagination';

interface AppTablePaginationProps {
	options: PaginationOptions;
}

const AppTablePagination = memo(({ options }: AppTablePaginationProps) => {
	if (options.count === 0) {
		return null;
	}

	return (
		<TablePagination
			component="div"
			labelRowsPerPage="Строк:"
			sx={{
				'& .MuiTablePagination-toolbar': {
					pl: 0,
				},
			}}
			{...options}
		/>
	);
});

AppTablePagination.displayName = 'AppTablePagination';

export default AppTablePagination;
