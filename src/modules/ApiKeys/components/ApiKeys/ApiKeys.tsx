import type { TypographyProps } from '@mui/material/Typography';

import AddForm, { type AddFormSubmitHandler } from '../AddForm';
import { useCallback } from 'react';
import { useAppDispatch } from '@shared/store/hooks';
import { addApiKey } from '../../store/apiKeysSlice';
import { v4 as uuid } from 'uuid';
import { getNowTimestamp } from '@modules/ApiKeys/utils/date';

import Section from '@UI/Section';
import ApiKeysTable from '../ApiKeysTable';

interface ApiKeysProps {
	titleVariant?: TypographyProps['variant'];
	titleComponent?: TypographyProps['component'];
	titleFormComponent?: TypographyProps['component'];
}

const ApiKeys = ({ titleVariant, titleComponent, titleFormComponent }: ApiKeysProps) => {
	const dispatch = useAppDispatch();

	const handleAddApiKey = useCallback<AddFormSubmitHandler>(
		(data, reset) => {
			dispatch(
				addApiKey({
					id: uuid(),
					name: data.nameApiKey,
					key: uuid(),
					createdAt: getNowTimestamp(),
				}),
			);

			reset();
		},
		[dispatch],
	);

	return (
		<Section titleText="API-ключи" titleVariant={titleVariant} titleComponent={titleComponent}>
			<AddForm titleComponent={titleFormComponent} onSubmit={handleAddApiKey} />
			<ApiKeysTable />
		</Section>
	);
};

export default ApiKeys;
