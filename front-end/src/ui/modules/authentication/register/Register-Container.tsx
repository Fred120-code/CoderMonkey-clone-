//IMPORT REACT
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

//COMPOSANTS
import RegisterView from "./RegisterView";

//TYPEs
import { RegisterFormFielsType } from "@/types/form";


const RegisterContainer = () => {
	const [isLoading, setIsloading] = useState<boolean>(false);

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();

	const handleCreateUserAuthentication = ({
		email,
		password,
		how_did_hear,
	}: RegisterFormFielsType) => {};

	const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
		setIsloading(true);
		console.log(formData);

		const { password } = formData;

		if (password.length <= 5) {
			setError("password", {
				type: "manual",
				message: "ton mot de passe doit avoir au moins 6 caractères",
			});

			return;
		}
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
