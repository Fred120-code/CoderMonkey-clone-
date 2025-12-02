import { FromTypes } from "@/types/form";
import Button from "@/ui/design-system/button/Button";
import Input from "@/ui/design-system/forms/Input";

interface Props {
	form: FromTypes;
}
const ForgetPwForm = ({ form }: Props) => {
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
			<Button
				isloading={isLoading}
				disabled={isLoading}
				type="submit"
				fullWidth={true}
			>
				{" "}
        Envoyer
			</Button>
		</form>
	);
};

export default ForgetPwForm;
