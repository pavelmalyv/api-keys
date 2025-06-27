import type { ApiKeys } from '../../types';

import { useMemo } from 'react';
import { getDisplayDateForTimestamp } from '../../utils/date';

import Box from '@mui/material/Box';
import ApiKeyView from '../../components/ApiKeyView';
import ApiKeySwitch from '../../components/ApiKeySwitch';
import DeleteApiKey from '../../components/DeleteApiKey';

const useTableBodyRender = (body: ApiKeys) => {
	const render = useMemo(
		() =>
			body.map(({ id, name, key, isActive, createdAt, ...cells }) => ({
				...cells,
				id,
				createdAt: getDisplayDateForTimestamp(createdAt),
				name: <Box sx={{ overflowWrap: 'anywhere', maxWidth: 300 }}>{name}</Box>,
				key: <ApiKeyView apiKey={key} />,
				isActive: <ApiKeySwitch id={id} isActive={isActive} />,
				delete: <DeleteApiKey id={id} />,
			})),
		[body],
	);

	return render;
};

export default useTableBodyRender;
