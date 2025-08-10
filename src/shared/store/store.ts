import { configureStore } from '@reduxjs/toolkit';
import { apiKeysReducer } from '@modules/ApiKeys';

export const store = configureStore({
	reducer: {
		apiKeys: apiKeysReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
