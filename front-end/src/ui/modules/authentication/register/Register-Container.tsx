import { SubmitHandler, useForm } from "react-hook-form";
import RegisterView  from "./RegisterView";
import { RegisterFormFielsType } from "@/types/form";

const RegisterContainer = () => {
	const isLoading = false;
	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();

	const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
		console.log( " formaData", formData);
	};

	return (
		<>
			<RegisterView
				form={{
					errors,
					control,
					register,
					handleSubmit,
					onSubmit,
					isLoading,
				}}
			/>
		</>
	);
};

export default RegisterContainer;
