import React, { useEffect, useState } from "react";
import LoginView from "./LoginView";
import { LoginFormFielsType } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import useToggle from "@/hooks/useToggle";
import { firebaseSignInUser } from "@/api/Authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const LoginContainer = () => {
	const router = useRouter();
	const { value: isLoading, setValue: setIsloading } = useToggle({
		initial: false,
	});

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				console.log("user", user);
				// ...
			} else {
				console.log("Aucun utlisateur connecté");
				// User is signed out
				// ...
			}
		});
	}, []);

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
		console.log("formData", formData);
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
