import type { SwitchProps } from '@mui/material';
import Switch from '@mui/material/Switch';

type AppSwitchProps = SwitchProps;

const AppSwitch = ({ ...props }: AppSwitchProps) => {
	return <Switch {...props} />;
};

export default AppSwitch;
