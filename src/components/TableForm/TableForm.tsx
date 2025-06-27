import type { TypographyProps } from '@mui/material';

import { useId } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TableFormProps = {
	title: string;
	titleComponent?: TypographyProps['component'];
	children: React.ReactNode;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const TableForm = ({ title, titleComponent, children, onSubmit }: TableFormProps) => {
	const titleId = useId();

	return (
		<Box sx={{ marginBottom: 2 }}>
			<Typography
				variant="body1"
				component={titleComponent ?? 'h2'}
				id={titleId}
				sx={{ marginBottom: 2, fontWeight: 600 }}
			>
				{title}
			</Typography>
			<Box
				component="form"
				onSubmit={onSubmit}
				aria-labelledby={titleId}
				sx={{
					display: 'flex',
					gap: [1.5, 1.75],
					flexDirection: { xs: 'column', sm: 'row' },
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

type TableFormFieldsProps = {
	children: React.ReactNode;
};

const TableFormFields = ({ children }: TableFormFieldsProps) => {
	return <Box sx={{ flex: 1 }}>{children}</Box>;
};

TableForm.Fields = TableFormFields;

export default TableForm;
export type { TableFormProps };
