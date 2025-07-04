import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectApiKeysByActive } from '../../store/apiKeysSelectors';

import { deleteApiKeys } from '../../store/apiKeysSlice';
import { memo } from 'react';
import AppButton from '@/UI/AppButton';

const DeleteDisabledApiKeys = memo(() => {
	const apiKeysDisabled = useAppSelector((state) => selectApiKeysByActive(state, false));
	const hasDisabledApiKeys = apiKeysDisabled.length > 0;
	const dispatch = useAppDispatch();

	const handleDelete = () => {
		const ids = apiKeysDisabled.map((apiKey) => apiKey.id);
		dispatch(deleteApiKeys(ids));
	};

	return (
		<AppButton variant="outlined" disabled={!hasDisabledApiKeys} onClick={handleDelete}>
			Удалить неактивные {hasDisabledApiKeys && `(${apiKeysDisabled.length})`}
		</AppButton>
	);
});

DeleteDisabledApiKeys.displayName = 'DeleteDisabledApiKeys';

export default DeleteDisabledApiKeys;
