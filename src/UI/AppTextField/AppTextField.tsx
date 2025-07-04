import type { TextFieldProps } from '@mui/material';
import TextField from '@mui/material/TextField';

const AppTextField = ({ ...props }: TextFieldProps) => {
	return <TextField {...props} fullWidth />;
};

export default AppTextField;
