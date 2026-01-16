import React, { useState } from "react";
import OnbordingView from "./OnboardingView";
import { OnboardingStepListInterface } from "@/types/OnboardingStepList";
import WelcomeStep from "./components/steps/welcomeStep/WelcomeStep";
import ProfileStep from "./components/steps/ProfileStep/ProfileStep";

const OnboardingContainer = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);

	//liste de step
	const stepList: OnboardingStepListInterface[] = [
		{
			id: 1,
			label: "Bienvenue",
			component: { step: WelcomeStep },
		},
		{
			id: 2,
			label: "Profile",
			component: { step: ProfileStep },
		},
	];

	//permet d'obtenir la step courante
	const getCurrentStep = () => {
		return stepList.find((element) => element.id === currentStep);
	};

	//permet d'aller à la step suivante
	const nextStep = () => {
		if (currentStep < stepList.length) {
			setCurrentStep(currentStep + 1);
		}
	};

	//permet d'aller à la step précédente
	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	//renvoie true si nous sommes à la premiere etape, false sinon
	const isFirtStep = () => {
		return currentStep == 1 ? true : false;
	};

	//renvoie true si nous sommes à la derniere etape, false sinon
	const isFinalStep = () => {
		return currentStep === stepList.length ? true : false;
	};

	return (
		<OnbordingView
			getCurrentStep={getCurrentStep}
			nextStep={nextStep}
			prevStep={prevStep}
			isFirtStep={isFirtStep}
			isFinalStep={isFinalStep}
			stepList={stepList}
		/>
	);
};

export default OnboardingContainer;
