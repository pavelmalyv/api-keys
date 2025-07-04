import type { Override } from '@/types';

import { useMediaQuery, type SxProps } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

import Box, { type BoxProps } from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AppButtonIcon from '../AppButtonIcon';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import useCopyToClipboard from '@/hooks/useCopyToClipboard/useCopyToClipboard';

type CopyToClipboardOwnProps = {
	copyText: string;
	iconSx?: SxProps;
};

type CopyToClipboardProps = Override<BoxProps, CopyToClipboardOwnProps>;

const TOOLTIP_CLOSE_DELAY_MS = 4000;

const CopyToClipboard = ({ iconSx, children, copyText, ...props }: CopyToClipboardProps) => {
	const [isCopied, setIsCopied] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const isTouch = useMediaQuery('(pointer: coarse)');
	const copyToClipboard = useCopyToClipboard();
	const tooltipCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (tooltipCloseTimerRef.current) {
			clearTimeout(tooltipCloseTimerRef.current);
			tooltipCloseTimerRef.current = null;
		}

		if (isTouch && isOpen) {
			tooltipCloseTimerRef.current = setTimeout(() => setIsOpen(false), TOOLTIP_CLOSE_DELAY_MS);
		}

		return () => {
			if (tooltipCloseTimerRef.current) {
				clearTimeout(tooltipCloseTimerRef.current);
				tooltipCloseTimerRef.current = null;
			}
		};
	}, [isOpen, isTouch]);

	const handleTooltipOpen = () => {
		setIsCopied(false);
		setIsOpen(true);
	};

	const handleTooltipClose = () => {
		setIsOpen(false);
	};

	const handleClickAway = () => {
		if (!isTouch) {
			return;
		}

		setIsOpen(false);
	};

	const handleClick = async () => {
		const result = await copyToClipboard(copyText);

		if (result.success) {
			setIsCopied(true);
			setIsOpen(true);
		}
	};

	return (
		<Box {...props}>
			<ClickAwayListener onClickAway={handleClickAway}>
				<Tooltip
					title={isCopied ? 'Скопировано' : 'Скопировать'}
					placement="top"
					open={isOpen}
					onOpen={handleTooltipOpen}
					onClose={handleTooltipClose}
					disableFocusListener={isTouch}
					disableHoverListener={isTouch}
					disableTouchListener={isTouch}
				>
					<AppButtonIcon onClick={handleClick}>
						<ContentCopyIcon sx={iconSx} />
					</AppButtonIcon>
				</Tooltip>
			</ClickAwayListener>

			{children}
		</Box>
	);
};

export default CopyToClipboard;
