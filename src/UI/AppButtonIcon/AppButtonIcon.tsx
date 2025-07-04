import type { IconButtonProps } from '@mui/material';
import IconButton from '@mui/material/IconButton';

type AppButtonIconProps = IconButtonProps;

const AppButtonIcon = ({ size = 'medium', children, ...props }: AppButtonIconProps) => {
	return (
		<IconButton size={size} {...props}>
			{children}
		</IconButton>
	);
};

export default AppButtonIcon;
