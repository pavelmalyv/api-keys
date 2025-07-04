import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ApiKey, ApiKeysState } from '../types';

type AddApiKeyOptions = Omit<ApiKey, 'isActive'> & Partial<Pick<ApiKey, 'isActive'>>;
type UpdateApiKeyOptions = Partial<Omit<ApiKey, 'id'>> & Pick<ApiKey, 'id'>;

const initialState: ApiKeysState = {};

export const apiKeysSlice = createSlice({
	name: 'apiKeys',
	initialState,
	reducers: {
		addApiKey: (store, action: PayloadAction<AddApiKeyOptions>) => {
			const { id, isActive = true, ...options } = action.payload;
			store[id] = {
				id,
				...options,
				isActive,
			};
		},
		updateApiKey: (store, action: PayloadAction<UpdateApiKeyOptions>) => {
			const { id, ...options } = action.payload;
			store[id] = {
				...store[id],
				...options,
			};
		},
		deleteApiKeys: (store, action: PayloadAction<ApiKey['id'][]>) => {
			for (const id of action.payload) {
				delete store[id];
			}
		},
	},
});

export const { addApiKey, updateApiKey, deleteApiKeys } = apiKeysSlice.actions;
export const apiKeysReducer = apiKeysSlice.reducer;
