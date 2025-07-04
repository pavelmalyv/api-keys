import type { TypographyProps } from '@mui/material';
import type { AddFormSubmitHandler, FormValues } from './AddForm.types';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { memo } from 'react';

import TableForm from '@components/TableForm';
import AppButton from '@UI/AppButton';
import AppTextField from '@/UI/AppTextField';
import { formSchema } from './addFormSchema';

interface AddFormProps {
	titleComponent?: TypographyProps['component'];
	onSubmit: AddFormSubmitHandler;
}

const AddForm = memo(({ titleComponent, onSubmit }: AddFormProps) => {
	const { control, handleSubmit, reset } = useForm<FormValues>({
		resolver: yupResolver(formSchema),
		defaultValues: {
			nameApiKey: '',
		},
	});

	return (
		<TableForm
			title="Добавить новый API-ключ"
			titleComponent={titleComponent}
			onSubmit={handleSubmit((data) => onSubmit(data, () => reset()))}
		>
			<TableForm.Fields>
				<Controller
					control={control}
					name="nameApiKey"
					render={({ field, fieldState }) => (
						<AppTextField
							label="Название"
							aria-required="true"
							{...field}
							error={fieldState.invalid}
							helperText={fieldState.error?.message}
							size="small"
						/>
					)}
				/>
			</TableForm.Fields>

			<AppButton variant="outlined" size="large" type="submit" sx={{ height: 40 }}>
				Добавить
			</AppButton>
		</TableForm>
	);
});

AddForm.displayName = 'AddForm';

export default AddForm;
