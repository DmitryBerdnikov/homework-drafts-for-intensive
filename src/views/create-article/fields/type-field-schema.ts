import { z } from 'zod'

export const typeFieldSchema = z.discriminatedUnion('type', [
	z.object({ type: z.literal('draft') }),
	z.object({ type: z.literal('published'), description: z.string() }),
])

export type TypeFieldFormData = z.infer<typeof typeFieldSchema>

export const TYPE_FIELD_VALUES_KEY = 'content'

export type TypeFieldValues = {
	[TYPE_FIELD_VALUES_KEY]: TypeFieldFormData
}
