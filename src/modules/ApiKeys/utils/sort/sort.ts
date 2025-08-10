import type { SortOrder, SortType } from '@shared/types';

const assertNever = (x: never): never => {
	throw new Error(`Unexpected value: ${x}`);
};

export const combineSort = (
	a: string | number | boolean,
	b: string | number | boolean,
	order: SortOrder,
	type: SortType,
) => {
	let result = 0;

	switch (type) {
		case 'string': {
			result = String(a).localeCompare(String(b));
			break;
		}
		case 'number':
		case 'date': {
			result = Number(a) - Number(b);
			break;
		}
		default: {
			return assertNever(type);
		}
	}

	return order === 'asc' ? result : -result;
};
