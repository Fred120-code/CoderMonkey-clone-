import { useState } from "react";
import ForgotPassWordView from "./ForgotPassWordView";
import { RegisterFormFielsType } from "@/types/form";
import { useForm, SubmitHandler } from "react-hook-form";

const ForgotPWContainer = () => {
	const [isLoading, setIsloading] = useState<boolean>(false);

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();

	const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
		console.log("formData", formData);
		setIsloading(true);
	};

	return (
		<div>
			<ForgotPassWordView
				form={{
					errors,
					control,
					register,
					handleSubmit,
					onSubmit,
					isLoading,
				}}
			/>
		</div>
	);
};

export default ForgotPWContainer;
