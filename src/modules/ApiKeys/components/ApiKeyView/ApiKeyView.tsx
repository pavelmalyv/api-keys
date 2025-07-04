import type { Override } from '@/types';
import type { BoxProps } from '@mui/material';
import type { ApiKeyValue } from '../../types';

import Box from '@mui/material/Box';
import CopyToClipboard from '@/UI/CopyToClipboard';

type ApiKeyViewOwnProps = {
	apiKey: ApiKeyValue;
};

type ApiKeyViewProps = Override<BoxProps, ApiKeyViewOwnProps>;

const ApiKeyView = ({ apiKey, children, ...props }: ApiKeyViewProps) => {
	return (
		<Box {...props} sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ minWidth: 150 }}>{apiKey}</Box>

			<CopyToClipboard copyText={apiKey} iconSx={{ fontSize: 'body2.fontSize' }} />

			{children}
		</Box>
	);
};

export default ApiKeyView;
