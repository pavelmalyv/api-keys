import type { SortOrder, Override } from '@/types';

import Box, { type BoxProps } from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

type SortIndicatorOwnProps = {
	order: SortOrder;
};

type SortIndicatorProps = Override<BoxProps, SortIndicatorOwnProps>;

const SortIndicator = ({ order, children, ...props }: SortIndicatorProps) => {
	return (
		<Box sx={visuallyHidden} {...props}>
			{order === 'desc' ? 'отсортировано по убыванию' : 'отсортировано по возрастанию'}

			{children}
		</Box>
	);
};

export default SortIndicator;
export type { SortIndicatorProps };
