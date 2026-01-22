import { BaseComponentProps } from "@/types/OnboardingStepList";
import OnboardingFooter from "../../footer/OnboardingFooter";
import Container from "@/ui/components/container/Container";
import OnboardingTabs from "../../tabs/OnboardingTabs";
import Typography from "@/ui/design-system/typography/Typography";
import OnboardingLayout from "../../OnboardingLayout";
import ProfileStepForm from "./ProfileStepForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/form";
import useToggle from "@/hooks/useToggle";
import { FireStoreUpdateDoc } from "@/api/FireStore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProfileStep = ({
	stepList,
	getCurrentStep,
	nextStep,
	prevStep,
	isFinalStep,
	isFirtStep,
}: BaseComponentProps) => {
	const { value: isLoading, setValue: setLoading } = useToggle();
	const {
		handleSubmit,
		control,
		formState: { errors },
		register,
		reset,
		setValue,
	} = useForm<OnboardingProfileFormFieldsType>();
	const { authUser } = useAuth();
	const { displayName, expertise, biography } = authUser.userDocument;
	console.log("authUser", authUser);

	//display value is exist
	useEffect(() => {
		const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
			"displayName",
			"expertise",
			"biography",
		];

		for (const field of fieldsToUpdate) {
			setValue(field, authUser.userDocument[field]);
		}
	});


	//add formData in user doc
	const handleUpdateUserDocument = async (
		formData: OnboardingProfileFormFieldsType,
	) => {
		console.log("use api");
		const { error } = await FireStoreUpdateDoc(
			"users",
			authUser.uid,
			formData,
		);
		if (error) {
			setLoading(false);
			toast.error(error.message);
			return;
		}

		setLoading(false);
		reset();
		nextStep();
	};

	//send form
	const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
		formData,
	) => {
		setLoading(true);

		if (
			displayName !== formData.displayName ||
			expertise !== formData.expertise ||
			biography !== formData.biography
		) {
			handleUpdateUserDocument(formData);
		}

		nextStep();
	};

	return (
		<OnboardingLayout>
			<div className="h-full overflow-auto">
				<Container className="grid grid-cols-12 h-full">
					<div className="relative z-0 flex items-center h-full col-span-6 py-10">
						<div className="w-full space-y-28 pb-4">
							<OnboardingTabs
								tabs={stepList}
								getCurrentStep={getCurrentStep}
							/>
							<div>
								<Typography
									variant="h1"
									components="h1"
									className=""
								>
									Présente-toi !
								</Typography>
								<Typography
									variant="body-base"
									components="p"
									theme="gray"
								>
									Complète ton profil pour que nous puissions
									mieux te connaître. Cela nous permettra de
									personnaliser ton expérience d'apprentissage
									et te proposer des ressources adaptées à tes
									besoins.
								</Typography>
							</div>
						</div>
					</div>
					<div className="flex items-center h-full col-span-6">
						<div className="w-full flex justify-end">
							<ProfileStepForm
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
					</div>
				</Container>
			</div>
			<OnboardingFooter
				nextStep={handleSubmit(onSubmit)}
				prevStep={prevStep}
				isFinalStep={isFinalStep}
				isFirtStep={isFirtStep}
				isLoading={isLoading}
			/>
		</OnboardingLayout>
	);
};

export default ProfileStep;
