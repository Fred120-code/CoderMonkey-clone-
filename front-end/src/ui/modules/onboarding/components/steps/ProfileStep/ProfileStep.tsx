import { BaseComponentProps } from "@/types/OnboardingStepList";
import React from "react";
import OnboardingFooter from "../../footer/OnboardingFooter";

const ProfileStep = ({
	nextStep,
	prevStep,
	isFinalStep,
	isFirtStep,
}: BaseComponentProps) => {
	return (
		<div>
			profilestep
			<OnboardingFooter
				nextStep={nextStep}
				prevStep={prevStep}
				isFinalStep={isFinalStep}
				isFirtStep={isFirtStep}
			/>
		</div>
	);
};

export default ProfileStep;
