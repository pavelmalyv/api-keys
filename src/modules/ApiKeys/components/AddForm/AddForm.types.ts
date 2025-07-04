import type { InferType } from 'yup';
import type { formSchema } from './addFormSchema';

export type FormValues = InferType<typeof formSchema>;
export type AddFormSubmitHandler = (data: FormValues, reset: () => void) => void;
