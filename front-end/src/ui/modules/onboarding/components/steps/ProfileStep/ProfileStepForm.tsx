import { FromTypes } from "@/types/form";
import Input from "@/ui/design-system/forms/Input";
import React from "react";
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
				label="Biography"
				placholder="developpeur fullstack freelance...."
				isLoading={isLoading}
				type="text"
				register={register}
				errorMsg="tu dois renseigner ton expertise"
				id="expertise"
				errors={errors}
			/>
		</form>
	);
};

export default ProfileStepForm;
