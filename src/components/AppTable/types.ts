import type { TablePaginationProps } from '@mui/material/TablePagination';
import type { SortOrder, SortType } from '@shared/types';

export type HeadData<T extends string = string> = {
	id: T;
	label: React.ReactNode;
	sortType?: SortType;
}[];
export type RenderHeadColumns = (columns: HeadData) => HeadData;

export type TableSort = {
	sortBy: string;
	order: SortOrder;
	onChange: (sortBy: string, currentOrder: SortOrder, sortType: SortType) => void;
};

export type BodyData<T extends string = string> = ({
	id: string;
} & Record<T, string | number | boolean>)[];

export type RenderBodyRow = (row: BodyData[0]) => Record<string, React.ReactNode>;

export type PaginationOptions = Pick<
	TablePaginationProps,
	'page' | 'count' | 'rowsPerPageOptions' | 'rowsPerPage' | 'onPageChange' | 'onRowsPerPageChange'
>;
