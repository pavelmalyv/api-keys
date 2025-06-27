import { createCompoundContext } from '@/context/createCompoundContext';
import type { AppTableHead, TableBodyRows, GenericColumnId } from './AppTable.types';

type AppTableContext = {
	head: AppTableHead<GenericColumnId>;
	body: TableBodyRows<GenericColumnId>;
};

const [useAppTableContext, AppTableProvider] = createCompoundContext<AppTableContext>();
export { useAppTableContext, AppTableProvider };
