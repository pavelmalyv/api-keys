import { createContextFactory } from '@shared/utils/createContextFactory';
import type { AppTableHead, TableBodyRows, GenericColumnId } from './AppTable.types';

const [useHeadContext, HeadProvider] = createContextFactory<AppTableHead<GenericColumnId>>();
const [useBodyContext, BodyProvider] = createContextFactory<TableBodyRows<GenericColumnId>>();

export { useHeadContext, useBodyContext, HeadProvider, BodyProvider };
