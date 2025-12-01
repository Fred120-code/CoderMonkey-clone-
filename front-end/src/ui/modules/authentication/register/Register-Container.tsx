import { SubmitHandler, useForm } from "react-hook-form";
import RegisterView  from "./RegisterView";
import { RegisterFormFielsType } from "@/types/form";
import { useState } from "react";

const RegisterContainer = () => {

	const [ isLoading, setIsloading] = useState<boolean>(false)

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();

	const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
		setIsloading(true)
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
