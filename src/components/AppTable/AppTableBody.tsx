import type { TableBodyProps } from '@mui/material';

import { useBodyContext, useHeadContext } from './AppTableContext';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const AppTableBody = ({ children, ...props }: TableBodyProps) => {
	const body = useBodyContext();
	const head = useHeadContext();

	return (
		<TableBody {...props}>
			{body.length > 0 ? (
				body.map((row) => (
					<TableRow key={row.id}>
						{head.map(({ id: columnId }) => (
							<TableCell key={columnId}>{row[columnId] ?? null}</TableCell>
						))}
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell
						colSpan={head.length}
						sx={{ textAlign: 'center', height: 120, color: 'text.secondary' }}
					>
						Добавьте свой первый API-ключ
					</TableCell>
				</TableRow>
			)}

			{children}
		</TableBody>
	);
};

export default AppTableBody;
