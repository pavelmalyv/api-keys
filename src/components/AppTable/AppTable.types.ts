import type { SortType } from '@shared/types';

export type GenericColumnId = string;

export type AppTableHead<T extends GenericColumnId> = ReadonlyArray<{
	id: T;
	label: React.ReactNode;
	sortType?: SortType;
}>;

export type TableBodyRow<T extends GenericColumnId> = { id: GenericColumnId } & Record<
	T,
	React.ReactNode
>;
export type TableBodyRows<T extends GenericColumnId> = TableBodyRow<T>[];
