import type { SortOrder } from '@shared/types';

import Box, { type BoxProps } from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

interface SortIndicatorProps extends BoxProps {
	order: SortOrder;
}

const SortIndicator = ({ order, children, ...props }: SortIndicatorProps) => {
	return (
		<Box sx={visuallyHidden} {...props}>
			{order === 'desc' ? 'отсортировано по убыванию' : 'отсортировано по возрастанию'}

			{children}
		</Box>
	);
};

export default SortIndicator;
