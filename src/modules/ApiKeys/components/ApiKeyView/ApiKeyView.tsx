import type { ApiKeyValue } from '../../types';

import Box from '@mui/material/Box';
import CopyToClipboard from '@/UI/CopyToClipboard';

interface ApiKeyViewProps {
	apiKey: ApiKeyValue;
}

const ApiKeyView = ({ apiKey, ...props }: ApiKeyViewProps) => {
	return (
		<Box {...props} sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ minWidth: 150 }}>{apiKey}</Box>

			<CopyToClipboard copyText={apiKey} iconSx={{ fontSize: 'body2.fontSize' }} />
		</Box>
	);
};

export default ApiKeyView;
