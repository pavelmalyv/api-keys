import type { IconButtonProps } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const AppButtonIcon = ({ size = 'medium', children, ...props }: IconButtonProps) => {
	return (
		<IconButton size={size} {...props}>
			{children}
		</IconButton>
	);
};

export default AppButtonIcon;
