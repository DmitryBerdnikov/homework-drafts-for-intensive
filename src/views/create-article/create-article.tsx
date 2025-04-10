import { useMutation } from '@tanstack/react-query'
import { articleAPI } from '../../api/article-api'
import { useNavigate } from 'react-router'
import { routes } from '../../routes'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { TypeFiled } from './fields/type-field'
import { createFormSchema, CreateFormValues } from './form-schema'

export const CreateArticle = () => {
	const form = useForm<CreateFormValues>({
		resolver: zodResolver(createFormSchema),
		defaultValues: {
			title: '',
		},
	})

	const { register, handleSubmit, control } = form

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

	console.log('RENDER FORM');

	return (
		<div>
			<h1>Создать статью</h1>
			<FormProvider {...form}>
				<form onSubmit={submitHandler}>
					<input type="text" {...register('title')} />

					<TypeFiled control={control} />

					<button
						type="submit"
						disabled={status === 'pending'}
						style={{ marginTop: '8px' }}
					>
						{status === 'pending' ? 'Создание' : 'Создать'}
					</button>
				</form>
			</FormProvider>
		</div>
	)
}
