import { FromTypes } from "@/types/form";
import Button from "@/ui/design-system/button/Button";

interface Props {
	form: FromTypes;
}

const RegisterForm = ({ form }: Props) => {
	const { control, onSubmit, errors, isLoading, register, handleSubmit } =
		form;

	console.log("form", form);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="email"
				placeholder="johndoe@gmail.com"
				disabled={isLoading}
				className=""
				{...register("email", {
					required: {
						value: true,
						message: "Ce champ est requis !",
					},
				})}
				autoComplete="off"
			/>
			<input
				type="password"
				placeholder="Mot de passe"
				{...register("password", {
					required: {
						value: true,
						message: "Ce champ est requis !",
					},
				})}
				autoComplete="off"
			/>
			<input
				type="text"
				placeholder="Comment nous avez-vous connu ...."
				disabled={isLoading}
				className=""
				{...register("how_did_hear", {
					required: {
						value: true,
						message: "Ce champ est requis !",
					},
				})}
				autoComplete="off"
			/>
      <Button isloading={isLoading} type="submit" fullWidth={true}> s'inscrire</Button>
		</form>
	);
};

export default RegisterForm;
