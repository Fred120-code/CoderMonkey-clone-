//IMPORT REACT
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

//COMPOSANTS
import RegisterView from "./RegisterView";

//TYPEs
import { RegisterFormFielsType } from "@/types/form";

//API
import firebaseCreateUser from "@/api/Authentication";

//HOOK
import useToggle from "@/hooks/useToggle";

const RegisterContainer = () => {
	
	const { value: isLoading, setValue: setIsloading } = useToggle({
		initial: false,
	});

	console.log(isLoading);

	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();

	const handleCreateUserAuthentication = async ({
		email,
		password,
		how_did_hear,
	}: RegisterFormFielsType) => {
		const { error, data } = await firebaseCreateUser(email, password);

		if (error) {
			setIsloading(false);
			toast.error(error.message);
			return;
		}

		toast.success("Bienvenue sur l'app des singes codeur");
		setIsloading(false);
		console.log(data);
	};

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

		handleCreateUserAuthentication(formData);
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
