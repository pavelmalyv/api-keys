export const getDisplayDateForTimestamp = (timestamp: number) => {
	return new Date(timestamp).toLocaleDateString('ru-RU');
};

export const getNowTimestamp = () => new Date().getTime();
