import { createCompoundContext } from '@/context/createCompoundContext';
import type { AppTableHead, TableBodyRows, GenericColumnId } from './AppTable.types';

const [useHeadContext, HeadProvider] = createCompoundContext<AppTableHead<GenericColumnId>>();
const [useBodyContext, BodyProvider] = createCompoundContext<TableBodyRows<GenericColumnId>>();

export { useHeadContext, useBodyContext, HeadProvider, BodyProvider };
