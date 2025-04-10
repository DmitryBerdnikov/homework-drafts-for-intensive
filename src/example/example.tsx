import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import z from 'zod'

const schema = z
	.object({
		firstName: z.string(),
		age: z.number().positive(),
	})
	.required()

export const Example = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})
	const onSubmit = (data) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('firstName')} />

			<input {...register('age')} />

			<input type="submit" />
		</form>
	)
}
