import type { Override } from '@/types';
import type { BoxProps } from '@mui/material';
import type { ApiKeyValue } from '../../types';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import CopyToClipboard from '@/UI/CopyToClipboard';

type ApiKeyViewOwnProps = {
	apiKey: ApiKeyValue;
};

type ApiKeyViewProps = Override<BoxProps, ApiKeyViewOwnProps>;

const ApiKeyView = ({ apiKey, children, ...props }: ApiKeyViewProps) => {
	return (
		<Box {...props} sx={{ display: 'flex', alignItems: 'center' }}>
			<Tooltip title={apiKey} placement="top">
				<Box
					sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 160 }}
				>
					{apiKey}
				</Box>
			</Tooltip>

			<CopyToClipboard copyText={apiKey} iconSx={{ fontSize: 'body2.fontSize' }} />

			{children}
		</Box>
	);
};

export default ApiKeyView;
export type { ApiKeyViewProps };
