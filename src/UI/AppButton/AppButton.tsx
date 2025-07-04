import type { ButtonProps } from '@mui/material';
import Button from '@mui/material/Button';

const AppButton = ({ variant = 'text', children, ...props }: ButtonProps) => {
	return (
		<Button variant={variant} {...props}>
			{children}
		</Button>
	);
};

export default AppButton;
