import clsx from "clsx";

interface Props {
	isLoading: boolean;
	placholder: string;
	type?: "text" | "email" | "password";
	register: any;
	errors: any;
	errorMsg: string;
	id: string;
	required?: boolean;
	isAutocompleted?: boolean;
}

const Input = ({
	isLoading,
	placholder,
	type = "text",
	register,
	errors,
	errorMsg = "tu dois renseigner ce champ",
	id,
	required = true,
	isAutocompleted = false,
}: Props) => {
	return (
		<>
			<input
				type={type}
				placeholder={placholder}
				disabled={isLoading}
				className={clsx(
					"w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
				)}
				{...register(id, {
					required: {
						value: { required },
						message: { errorMsg },
					},
				})}
				autoComplete={isAutocompleted ? "on" : "off"}
			/>
		</>
	);
};

export default Input;
