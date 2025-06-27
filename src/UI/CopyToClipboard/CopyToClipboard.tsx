import type { Override } from '@/types';
import type { SxProps } from '@mui/system';

import { useState } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AppButtonIcon from '../AppButtonIcon';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useCopyToClipboard from '@/hooks/useCopyToClipboard/useCopyToClipboard';

type CopyToClipboardOwnProps = {
	copyText: string;
	iconSx?: SxProps;
};

type CopyToClipboardProps = Override<BoxProps, CopyToClipboardOwnProps>;

const CopyToClipboard = ({ iconSx, children, copyText, ...props }: CopyToClipboardProps) => {
	const [isCopied, setIsCopied] = useState(false);
	const copyToClipboard = useCopyToClipboard();

	const handleCopy = async () => {
		const result = await copyToClipboard(copyText);

		if (result.success) {
			setIsCopied(true);
		}
	};

	return (
		<Box {...props}>
			<Tooltip
				title={isCopied ? 'Скопировано' : 'Скопировать'}
				placement="top"
				onOpen={() => setIsCopied(false)}
			>
				<AppButtonIcon onClick={handleCopy} sx={{ fontSize: 'inherit' }}>
					<ContentCopyIcon sx={iconSx} />
				</AppButtonIcon>
			</Tooltip>

			{children}
		</Box>
	);
};

export default CopyToClipboard;
export type { CopyToClipboardProps };
