import { useCallback } from 'react';
import useAppNotifications from '../useAppNotifications/useAppNotifications';

const useCopyToClipboardNotify = () => {
	const { showError } = useAppNotifications();

	const copyToClipboardNotify = useCallback(
		async (text: string) => {
			try {
				await navigator.clipboard.writeText(text);
			} catch (error) {
				showError('Ошибка копирования');

				throw error;
			}
		},
		[showError],
	);

	return copyToClipboardNotify;
};
export default useCopyToClipboardNotify;
