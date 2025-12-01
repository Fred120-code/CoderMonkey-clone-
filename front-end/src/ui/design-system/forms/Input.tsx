import clsx from "clsx";
import Typography from "../typography/Typography";

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
		<div className="space-y-2">
			<input
				type={type}
				placeholder={placholder}
				disabled={isLoading}
				className={clsx(
          isLoading && "cursor-not-allowed",
					errors[id]
						? " placeholder-alert-danger text-alert-danger"
						: "placeholder-gray-600",
					"w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary "
				)}
				{...register(id, {
					required: {
						value:  required ,
						message:  errorMsg ,
					},
				})}
				autoComplete={isAutocompleted ? "on" : "off"}
			/>
			{errors[id] && (
				<Typography variant="caption4" components="div" theme="danger">
					{errors[id]?.message}
				</Typography>
			)}
		</div>
	);
};

export default Input;
