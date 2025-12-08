//IMPORT REACT
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";

//COMPOSANTS
import ForgotPassWordView from "./ForgotPassWordView";

//TYPE
import { ForgotPasswordFielsType, RegisterFormFielsType } from "@/types/form";

//API D'AUTH
import { firebaseSendPasswordResetEmailUser } from "@/api/Authentication";

const ForgotPWContainer = () => {
	const router = useRouter();
	const [isLoading, setIsloading] = useState<boolean>(false);

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();

	const handlePasswordReset = async ({ email }: ForgotPasswordFielsType) => {
		const { error } = await firebaseSendPasswordResetEmailUser(email);

		if (error) {
			toast.error(error.message);
			setIsloading(false);
			return;
		}

		toast.success(`un email a été envoyer à l'adresse : ${email}`);
		setIsloading(false);
		router.push("/connexion");
	};

	const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
		handlePasswordReset(formData);
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
