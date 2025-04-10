import { Control, Controller, FieldValues, useWatch } from 'react-hook-form'
import { TypeFieldValues } from './type-field-schema'

type PartialControl<Values extends FieldValues> = Omit<
	Control<Values>,
	'_reset' | '_options' | '_getWatch' | 'register' | 'unregister' | '_subjects'
> & {
	_reset: any
	_options: any
	_getWatch: any
	register: any
	unregister: any
	_subjects: any
}

type TypeFiledProps = {
	control: PartialControl<TypeFieldValues>
}

export const TypeFiled = ({ control }: TypeFiledProps) => {
	const typeValue = useWatch({ control, name: 'content.type' })

	return (
		<>
			<Controller
				control={control}
				name="content.type"
				render={({ field }) => (
					<select {...field}>
						<option value="draft">draft</option>
						<option value="published">published</option>
					</select>
				)}
			/>

			{typeValue === 'published' && (
				<Controller
					control={control}
					name="content.description"
					render={({ field }) => <input {...field} />}
				/>
			)}
		</>
	)
}
