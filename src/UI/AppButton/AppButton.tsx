import type { ButtonProps } from '@mui/material';

import Button from '@mui/material/Button';

type AppButtonProps = ButtonProps;

const AppButton = ({ variant = 'text', children, ...props }: AppButtonProps) => {
	return (
		<Button variant={variant} {...props}>
			{children}
		</Button>
	);
};

export default AppButton;
export type { AppButtonProps };
