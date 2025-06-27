import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectApiKeysByActive } from '../../store/apiKeysSelectors';

import { deleteApiKeys } from '../../store/apiKeysSlice';
import { memo } from 'react';
import AppButton, { type AppButtonProps } from '@/UI/AppButton';

type DeleteDisabledApiKeysProps = AppButtonProps;

const DeleteDisabledApiKeys = memo(({ children, ...props }: DeleteDisabledApiKeysProps) => {
	const apiKeysDisabled = useAppSelector((state) => selectApiKeysByActive(state, false));
	const hasDisabledApiKeys = apiKeysDisabled.length > 0;
	const dispatch = useAppDispatch();

	const handleDelete = () => {
		const ids = apiKeysDisabled.map((apiKey) => apiKey.id);
		dispatch(deleteApiKeys(ids));
	};

	return (
		<AppButton variant="outlined" {...props} disabled={!hasDisabledApiKeys} onClick={handleDelete}>
			Удалить неактивные {hasDisabledApiKeys && `(${apiKeysDisabled.length})`}
			{children}
		</AppButton>
	);
});

DeleteDisabledApiKeys.displayName = 'DeleteDisabledApiKeys';

export default DeleteDisabledApiKeys;
export type { DeleteDisabledApiKeysProps };
