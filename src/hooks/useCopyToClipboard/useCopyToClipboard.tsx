import { useCallback } from 'react';
import useAppNotifications from '@/hooks/useAppNotifications/useAppNotifications';

const useCopyToClipboard = () => {
	const { showError } = useAppNotifications();

	const copyToClipboard = useCallback(
		async (text: string) => {
			try {
				await navigator.clipboard.writeText(text);

				return {
					success: true,
				};
			} catch (error) {
				if (import.meta.env.DEV) {
					console.error('Ошибка копирования: ', error);
				}

				showError('Ошибка копирования');

				return {
					success: false,
					error,
				};
			}
		},
		[showError],
	);

	return copyToClipboard;
};

export default useCopyToClipboard;
