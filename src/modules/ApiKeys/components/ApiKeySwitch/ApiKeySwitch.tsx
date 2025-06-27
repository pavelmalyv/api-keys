import type { Override } from '@/types';
import type { AppSwitchProps } from '@/UI/AppSwitch';
import type { ApiKey } from '../../types';

import { useAppDispatch } from '@store/hooks';
import { updateApiKey } from '../../store/apiKeysSlice';

import AppSwitch from '@/UI/AppSwitch';

type ApiKeySwitchOwnProps = {
	id: ApiKey['id'];
	isActive: ApiKey['isActive'];
};

type ApiKeySwitchProps = Override<AppSwitchProps, ApiKeySwitchOwnProps>;

const ApiKeySwitch = ({ id, isActive, ...props }: ApiKeySwitchProps) => {
	const dispatch = useAppDispatch();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateApiKey({ id, isActive: event.target.checked }));
	};

	return (
		<AppSwitch
			onChange={handleChange}
			checked={isActive}
			slotProps={{ input: { 'aria-label': 'Управление API-ключом' } }}
			{...props}
		/>
	);
};

export default ApiKeySwitch;
export type { ApiKeySwitchProps };
