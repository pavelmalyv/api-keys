import type { TextFieldProps } from '@mui/material';
import TextField from '@mui/material/TextField';

type AppTextFieldProps = TextFieldProps;

const AppTextField = ({ ...props }: AppTextFieldProps) => {
	return <TextField {...props} fullWidth />;
};

export default AppTextField;
export type { AppTextFieldProps };
