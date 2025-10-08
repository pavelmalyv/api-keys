import type { HeadData, BodyData, RenderBodyRow } from './types';
import { memo } from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import AppTableBodyRow from './AppTableBodyRow';

interface AppTableBodyProps {
	headData: HeadData;
	bodyData: BodyData;
	renderBodyRow?: RenderBodyRow;
}

const AppTableBody = memo(({ headData, bodyData, renderBodyRow }: AppTableBodyProps) => {
	return (
		<TableBody>
			{bodyData.length === 0 ? (
				<TableRow>
					<TableCell
						colSpan={headData.length}
						sx={{ textAlign: 'center', height: 120, color: 'text.secondary' }}
					>
						Добавьте свой первый API-ключ
					</TableCell>
				</TableRow>
			) : (
				bodyData.map((row) => (
					<AppTableBodyRow
						key={row.id}
						headData={headData}
						row={row}
						renderBodyRow={renderBodyRow}
					/>
				))
			)}
		</TableBody>
	);
});

export default AppTableBody;
