import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import LoginView from "./LoginView";

import { LoginFormFielsType } from "@/types/form";

import useToggle from "@/hooks/useToggle";

import { firebaseSignInUser } from "@/api/Authentication";

const LoginContainer = () => {
	const router = useRouter();
	const { value: isLoading, setValue: setIsloading } = useToggle({
		initial: false,
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<LoginFormFielsType>();

	const handleSinginUser = async ({
		email,
		password,
	}: LoginFormFielsType) => {
		const { error } = await firebaseSignInUser(email, password);

		if (error) {
			setIsloading(false);
			toast.error(error.message);
			return;
		}

		toast.success("Bon retour");
		setIsloading(false);
		reset();
		router.push("/mon-espace");
	};

	const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
		const { password } = formData;

		if (password.length <= 5) {
			setError("password", {
				type: "manual",
				message: "ton mot de passe doit avoir au moins 6 caractères",
			});
			setIsloading(false);
			return;
		}
		handleSinginUser(formData);
	};

	return (
		<div>
			<LoginView
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

export default LoginContainer;
