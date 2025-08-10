import type { RootState } from '@shared/store/store';
import type { SortOrder, SortType } from '@shared/types';
import type { ApiKey } from '../types';

import { createSelector } from '@reduxjs/toolkit';
import { combineSort } from '../utils/sort';

export const selectApiKeysBySort = createSelector(
	[
		(state: RootState) => state.apiKeys,
		(_, sortBy: keyof ApiKey) => sortBy,
		(_, __, order: SortOrder) => order,
		(_, __, ___, type: SortType) => type,
		(_, __, ___, ____, offset?: number) => offset,
		(_, __, ___, ____, ______, limit?: number) => limit,
	],
	(apiKeys, sortBy, order, type, offset, limit) => {
		const result = Object.values(apiKeys).sort((a, b) =>
			combineSort(a[sortBy], b[sortBy], order, type),
		);

		if (offset !== undefined || limit !== undefined) {
			const start = offset ?? 0;
			const end = limit !== undefined ? start + limit : undefined;

			if (start < 0 || (end !== undefined && end < 0)) {
				return {
					items: [],
					total: 0,
				};
			}

			return {
				items: result.slice(start, end),
				total: result.length,
			};
		} else {
			return {
				items: result,
				total: result.length,
			};
		}
	},
);

export const selectApiKeysByActive = createSelector(
	[(state: RootState) => state.apiKeys, (_, isActive: ApiKey['isActive']) => isActive],
	(apiKeys, isActive) => {
		const result: ApiKey[] = [];

		for (const key in apiKeys) {
			const apiKey = apiKeys[key];

			if (apiKey.isActive === isActive) {
				result.push(apiKey);
			}
		}

		return result;
	},
);
