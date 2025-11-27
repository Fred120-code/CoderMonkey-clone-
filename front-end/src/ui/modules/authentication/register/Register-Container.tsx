import { useForm, SubmitHandler } from "react-hook-form";
import RegisterView from "./RegisterView";
import { RegisterFormFielsType } from "@/types/form";

const RegisterContainer = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();
	return (
		<div>
			<RegisterView />
		</div>
	);
};

export default RegisterContainer;
