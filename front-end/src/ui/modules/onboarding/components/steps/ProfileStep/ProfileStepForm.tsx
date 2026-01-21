import { FromTypes } from "@/types/form";
import React from "react";
interface Props {
	form: FromTypes;
}
const ProfileStepForm = ({ form }: Props) => {
	const { errors, register, isLoading } = form;
	return (
		<form action="" className="w-full max-w-md space-y-4">
			mon formulaire
		</form>
	);
};

export default ProfileStepForm;
