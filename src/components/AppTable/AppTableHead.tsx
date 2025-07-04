import type { TableHeadProps } from '@mui/material';
import type { GenericColumnId } from './AppTable.types';
import type { SortOrder, Override, SortType } from '@/types';

import { useHeadContext } from './AppTableContext';
import { memo } from 'react';

import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import SortIndicator from '@/UI/SortIndicator';

type AppTableHeadOwnProps =
	| {
			isSortable?: never;
			orderBy?: never;
			sortOrder?: never;
			onSortChange?: never;
	  }
	| {
			isSortable: true;
			orderBy: GenericColumnId | null;
			sortOrder: SortOrder | null;
			onSortChange: ({
				sortBy,
				order,
				type,
			}: {
				sortBy: GenericColumnId;
				order: SortOrder;
				type: SortType;
			}) => void;
	  };

type AppTableHeadProps = Override<TableHeadProps, AppTableHeadOwnProps>;

const AppTableHead = memo(
	({ isSortable, orderBy, sortOrder, onSortChange, children, ...props }: AppTableHeadProps) => {
		const head = useHeadContext();

		return (
			<TableHead {...props}>
				<TableRow>
					{head.map(({ id, label, sortType }) => {
						if (sortType !== undefined && isSortable) {
							const isActive = orderBy === id;
							const order = isActive === false || sortOrder === null ? 'asc' : sortOrder;

							return (
								<TableCell key={id} sortDirection={order} sx={{ position: 'relative' }}>
									<TableSortLabel
										active={orderBy === id}
										direction={order}
										onClick={() => onSortChange({ sortBy: id, order, type: sortType })}
									>
										{label}
									</TableSortLabel>

									{sortOrder && <SortIndicator order={sortOrder} />}
								</TableCell>
							);
						} else {
							return <TableCell key={id}>{label}</TableCell>;
						}
					})}
				</TableRow>

				{children}
			</TableHead>
		);
	},
);

AppTableHead.displayName = 'AppTableHead';

export default AppTableHead;
