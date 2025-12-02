import { FromTypes } from "@/types/form";
import Button from "@/ui/design-system/button/Button";
import Input from "@/ui/design-system/forms/Input";

interface Props {
	form: FromTypes;
}

const LoginForm = ({ form }: Props) => {
	const { control, onSubmit, errors, isLoading, register, handleSubmit } =
		form;
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
			<Input
				isLoading={isLoading}
				placholder="Johndoe@gmail.com"
				type="email"
				register={register}
				errors={errors}
				errorMsg="tu dois renseigner ce champ"
				id="email"
				isAutocompleted={true}
			/>
			<Input
				isLoading={isLoading}
				placholder="Mot de passe"
				type="password"
				register={register}
				errors={errors}
				errorMsg="tu dois renseigner ce champ"
				id="password"
				isAutocompleted={false}
			/>

			<Button
				isloading={isLoading}
				disabled={isLoading}
				type="submit"
				fullWidth={true}
			>
				{" "}
				Connexion
			</Button>
		</form>
	);
};

export default LoginForm;
