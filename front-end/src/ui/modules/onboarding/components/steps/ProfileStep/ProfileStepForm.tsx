import { FromTypes } from "@/types/form";
import Input from "@/ui/design-system/forms/Input";
import TextArea from "@/ui/design-system/forms/TextArea";

interface Props {
	form: FromTypes;
}
const ProfileStepForm = ({ form }: Props) => {
	const { errors, register, isLoading } = form;
	return (
		<form action="" className="w-full max-w-md space-y-4">
			<Input
				label="Pseudo"
				placholder="Votre pseudo"
				isLoading={isLoading}
				type="text"
				register={register}
				errorMsg="tu dois renseigner un pseudo"
				id="displayName"
				errors={errors}
			/>

			<Input
				label="Expertise"
				placholder="developpeur fullstack freelance"
				isLoading={isLoading}
				type="text"
				register={register}
				errorMsg="tu dois renseigner ton expertise"
				id="expertise"
				errors={errors}
			/>
			<TextArea
				isLoading={isLoading}
				placholder="parles-nous de toi..."
				rows={5}
				register={register}
				errors={errors}
				id="biography"
				label="Biography"
				required={false}
			/>
		</form>
	);
};

export default ProfileStepForm;
