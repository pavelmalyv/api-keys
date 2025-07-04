import { object, string } from 'yup';

export const formSchema = object({
	nameApiKey: string()
		.required('Поле обязательно для заполнения')
		.max(100, 'Максимальная длина 100 символов'),
});
