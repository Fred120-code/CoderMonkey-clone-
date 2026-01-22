import clsx from "clsx";
import Typography from "../typography/Typography";

interface Props {
	isLoading: boolean;
	placholder: string;
	rows?: number;
	register: any;
	errors: any;
	errorMsg?: string;
	id: string;
	required?: boolean;
	isAutocompleted?: boolean;
	label?: string;
}

const TextArea = ({
	isLoading,
	placholder,
	rows = 5,
	register,
	errors,
	errorMsg = "Tu dois renseigner ce champ",
	id,
	required = true,
	isAutocompleted = false,
	label,
}: Props) => {
	return (
		<div className=" space-y-2">
			{label && (
				<Typography
					variant="caption3"
					components="div"
					theme={errors[id] ? "danger" : "gray"}
				>
					{label}
				</Typography>
			)}

			<textarea
				name=""
				id=""
				rows={rows}
				placeholder={placholder}
				className={clsx(
					isLoading
						? " bg-gray-300 focus:ring-gray-300 cursor-not-allowed"
						: "bg-white",
					errors[id]
						? " placeholder-alert-danger text-alert-danger"
						: "placeholder-gray-600",
					"w-full p-4 font-light border rounded focus:ring-1 focus:outline-none focus:ring-primary border-gray-400",
				)}
				disabled={isLoading}
				{...register(id, {
					required: {
						value: required,
						message: errorMsg,
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

export default TextArea;
