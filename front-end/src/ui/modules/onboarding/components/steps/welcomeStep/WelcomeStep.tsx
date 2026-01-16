import { BaseComponentProps } from "@/types/OnboardingStepList";
import React from "react";
import OnboardingFooter from "../../footer/OnboardingFooter";

const WelcomeStep = ({
	prevStep,
	nextStep,
	isFinalStep,
	isFirtStep,
}: BaseComponentProps) => {
	return (
		<div className="relative h-screen">
			welcome to Onboarding
			<OnboardingFooter
				prevStep={prevStep}
				nextStep={nextStep}
				isFinalStep={isFinalStep}
				isFirtStep={isFirtStep}
			/>
		</div>
	);
};

export default WelcomeStep;
