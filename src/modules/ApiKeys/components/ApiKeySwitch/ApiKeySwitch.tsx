import type { ApiKey } from '../../types';

import { useAppDispatch } from '@store/hooks';
import { updateApiKey } from '../../store/apiKeysSlice';

import AppSwitch from '@/UI/AppSwitch';

type ApiKeySwitchProps = {
	id: ApiKey['id'];
	isActive: ApiKey['isActive'];
};

const ApiKeySwitch = ({ id, isActive }: ApiKeySwitchProps) => {
	const dispatch = useAppDispatch();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateApiKey({ id, isActive: event.target.checked }));
	};

	return (
		<AppSwitch
			onChange={handleChange}
			checked={isActive}
			slotProps={{ input: { 'aria-label': 'Управление API-ключом' } }}
		/>
	);
};

export default ApiKeySwitch;
