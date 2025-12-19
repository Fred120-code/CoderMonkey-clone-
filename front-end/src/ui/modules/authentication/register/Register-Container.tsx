//IMPORT REACT
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

//COMPOSANTS
import RegisterView from "./RegisterView";

//TYPEs
import { RegisterFormFielsType } from "@/types/form";

//API
import { firebaseCreateUser } from "@/api/Authentication";

//HOOK
import useToggle from "@/hooks/useToggle";
import { FirestoreCreateDoc } from "@/api/FireStore";

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

	const handleCreateUserDocument = async (
		collectionName: string,
		documentId: string,
		data: object
	) => {
		const { error } = await FirestoreCreateDoc(
			collectionName,
			documentId,
			data
		);

		if (error) {
			toast.error(error.message);
			setIsloading(false);
			return;
		}

		toast.success("Bienvenue sur l'app des singes codeurs");
		setIsloading(false);
		reset();
	};

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

		const userDocumentData= {
			email:email,
			how_did_hear:how_did_hear,
			uuid:data.uid,
			creationDate: new Date()
		}

		handleCreateUserDocument("users", data.uid, userDocumentData)
		// toast.success("Bienvenue sur l'app des singes codeur");
		// setIsloading(false);
		// console.log(data);
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
