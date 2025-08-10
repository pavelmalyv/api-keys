import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import { ruRU } from '@mui/material/locale';
import { store } from '@shared/store/store';
import { Provider } from 'react-redux';
import { AppProvider } from '@toolpad/core/AppProvider';
import { NotificationsProvider } from '@toolpad/core/useNotifications';
import { toolpadRu } from './locales/toolpadRu';

import App from '@/App.tsx';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({}, ruRU);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline />
		<GlobalStyles
			styles={{
				body: {
					minWidth: '320px',
				},
			}}
		/>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<AppProvider theme={theme} localeText={toolpadRu}>
					<NotificationsProvider
						slotProps={{
							snackbar: {
								anchorOrigin: { vertical: 'top', horizontal: 'right' },
							},
						}}
					>
						<App />
					</NotificationsProvider>
				</AppProvider>
			</ThemeProvider>
		</Provider>
	</StrictMode>,
);
