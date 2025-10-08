import type { BodyData, HeadData, RenderBodyRow } from './types';
import { memo, useMemo } from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface AppTableBodyRowProps {
	headData: HeadData;
	row: BodyData[0];
	renderBodyRow?: RenderBodyRow;
}

const AppTableBodyRow = memo(({ headData, row, renderBodyRow }: AppTableBodyRowProps) => {
	const bodyRowRendered = useMemo(() => renderBodyRow?.(row) ?? row, [row, renderBodyRow]);

	return (
		<TableRow>
			{headData.map(({ id }) => (
				<TableCell key={id}>{bodyRowRendered[id]}</TableCell>
			))}
		</TableRow>
	);
});

AppTableBodyRow.displayName = 'AppTableBodyRow';

export default AppTableBodyRow;
