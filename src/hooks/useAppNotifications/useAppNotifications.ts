import type { NotificationKey } from '@/types';

import { useNotifications } from '@toolpad/core/useNotifications';
import { useCallback } from 'react';

const HIDE_DURATION = 3000;

const useAppNotifications = () => {
	const notifications = useNotifications();

	const showError = useCallback(
		(message: string) => {
			return notifications.show(message, {
				severity: 'error',
				autoHideDuration: HIDE_DURATION,
			});
		},
		[notifications],
	);

	const showSuccess = useCallback(
		(message: string) => {
			return notifications.show(message, {
				severity: 'success',
				autoHideDuration: 3000,
			});
		},
		[notifications],
	);

	const closeNotification = useCallback(
		(key: NotificationKey) => {
			if (key !== null) {
				notifications.close(key);
			}
		},
		[notifications],
	);

	return { showError, showSuccess, closeNotification };
};

export default useAppNotifications;
