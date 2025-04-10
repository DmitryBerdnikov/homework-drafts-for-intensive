import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

const schema = z
	.object({
		firstName: z.string(),
		age: z.number(),
	})
	.required()

type BaseFormProps = {
	className?: string
	mode: 'create' | 'update'
}

export const BaseForm = ({ mode, initialValues }: BaseFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	})
	const onSubmit = (data) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('firstName')} />
			<p>{errors.firstName?.message}</p>

			<input {...register('age')} />
			<p>{errors.age?.message}</p>

			<input type="submit" />
		</form>
	)
}
