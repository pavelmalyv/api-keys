import type { HeadData, TableSort } from './types';
import { memo } from 'react';

import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import SortIndicator from '@/UI/SortIndicator';

interface AppTableHeadProps {
	data: HeadData;
	tableSort: TableSort;
}

const AppTableHead = memo(({ data, tableSort }: AppTableHeadProps) => {
	return (
		<TableHead>
			<TableRow>
				{data.map(({ id, label, sortType }) => {
					if (sortType === undefined) {
						return <TableCell key={id}>{label}</TableCell>;
					}

					const isActive = tableSort?.sortBy === id;
					const order = isActive ? tableSort.order : 'asc';

					return (
						<TableCell key={id} sortDirection={order} sx={{ position: 'relative' }}>
							<TableSortLabel
								active={isActive}
								direction={order}
								onClick={() => tableSort?.onChange(id, order, sortType)}
							>
								{label}
							</TableSortLabel>

							{isActive && <SortIndicator order={order} />}
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
});

AppTableHead.displayName = 'AppTableHead';

export default AppTableHead;
