import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, type InferType } from 'yup';
import { memo } from 'react';

import TableForm, { type TableFormProps } from '@components/TableForm';
import AppButton from '@UI/AppButton';
import AppTextField from '@/UI/AppTextField';

const formSchema = object({
	nameApiKey: string()
		.required('Поле обязательно для заполнения')
		.max(100, 'Максимальная длина 100 символов'),
});

type FormValues = InferType<typeof formSchema>;
type AddFormProps = {
	titleComponent?: TableFormProps['titleComponent'];
	onSubmit: (data: FormValues, reset: () => void) => void;
};

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
export type { AddFormProps };
