import type { ApiKey } from '../../types';

import { useAppDispatch } from '@store/hooks';
import { deleteApiKeys } from '../../store/apiKeysSlice';

import AppButtonIcon from '@/UI/AppButtonIcon';
import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteApiKeyProps {
	id: ApiKey['id'];
}

const DeleteApiKey = ({ id, ...props }: DeleteApiKeyProps) => {
	const dispatch = useAppDispatch();

	const handleDelete = () => {
		dispatch(deleteApiKeys([id]));
	};

	return (
		<AppButtonIcon aria-label="Удалить API-ключ" onClick={handleDelete} {...props}>
			<DeleteIcon />
		</AppButtonIcon>
	);
};

export default DeleteApiKey;
