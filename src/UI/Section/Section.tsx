import type { BoxProps, TypographyProps } from '@mui/material';
import type { Override } from '@/types';

import { useId } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type SectionOwnProps = {
	titleText: string;
	titleVariant?: TypographyProps['variant'];
	titleComponent?: TypographyProps['component'];
};

type SectionProps = Override<BoxProps, SectionOwnProps>;

const Section = ({
	titleText,
	titleVariant,
	titleComponent,
	children,
	['aria-labelledby']: ariaLabelledby,
	...props
}: SectionProps) => {
	const titleId = useId();
	const ariaLabelledbyBox = ariaLabelledby ? `${titleId} ${ariaLabelledby}` : titleId;

	return (
		<Box component="section" sx={{ py: 4 }} aria-labelledby={ariaLabelledbyBox} {...props}>
			<Container>
				<Typography
					id={titleId}
					variant={titleVariant ?? 'h2'}
					component={titleComponent ?? 'h2'}
					sx={{ mb: 4 }}
				>
					{titleText}
				</Typography>

				{children}
			</Container>
		</Box>
	);
};

export default Section;
