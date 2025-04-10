import { z } from 'zod'
import { TYPE_FIELD_VALUES_KEY, typeFieldSchema } from './fields/type-field-schema'

export const createFormSchema = z.object({
	idWithArgId: z.string(), 
	title: z
		.string()
		.min(1, 'Название обязательно')
		.max(100, 'Слишком длинное название'),
	[TYPE_FIELD_VALUES_KEY]: typeFieldSchema,
})

export type CreateFormValues = z.infer<typeof createFormSchema>
