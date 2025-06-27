export type ApiKeyValue = string;
export type ApiKeys = ApiKey[];
export type DataApiKey = keyof ApiKey;

export type ApiKey = {
	id: string;
	name: string;
	key: ApiKeyValue;
	createdAt: number;
	isActive: boolean;
};

export type ApiKeysState = {
	[key: ApiKey['id']]: ApiKey;
};
