import React, { useState } from "react";
import OnbordingView from "./OnboardingView";

const OnboardingContainer = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);

  //liste de step
	const stepList = [
		{
			id: 1,
			label: "Bienvenue",
			component: { step: <div>step welcome</div> },
		},
		{
			id: 2,
			label: "Profile",
			component: { step: <div>step Profile</div> },
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
      setCurrentStep(currentStep - 1)
    }
  }

	console.log("getcurrentstate", getCurrentStep());
	return <OnbordingView />;
};

export default OnboardingContainer;
