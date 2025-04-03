import { useMutation } from '@tanstack/react-query'
import { articleAPI } from '../../api/article-api'
import { useNavigate } from 'react-router'
import { routes } from '../../routes'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const createFormSchema = z.object({
	title: z
		.string()
		.min(1, 'Название обязательно')
		.max(100, 'Слишком длинное название'),
})

type CreateFormValues = z.infer<typeof createFormSchema>

export const CreateArticle = () => {
	const { register, handleSubmit } = useForm<CreateFormValues>({
		resolver: zodResolver(createFormSchema),
		defaultValues: {
			title: '',
		},
	})

	const navigate = useNavigate()

	const { status, mutate } = useMutation({
		mutationFn: articleAPI.createArticle,
	})

	const submitHandler = handleSubmit((data: CreateFormValues) => {
		mutate({
			...data,
			content: {
				type: 'draft',
			},
		})
		navigate(routes.articles.getLink())
	})

	return (
		<div>
			<h1>Создать статью</h1>
			<form onSubmit={submitHandler}>
				<input type="text" {...register('title')} />
				<button
					type="submit"
					disabled={status === 'pending'}
					style={{ marginTop: '8px' }}
				>
					{status === 'pending' ? 'Создание' : 'Создать'}
				</button>
			</form>
		</div>
	)
}
