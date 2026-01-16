export interface BaseComponentProps {
	getCurrentStep: () => OnboardingStepListInterface | undefined;
	nextStep: () => void;
	prevStep: () => void;
	isFirtStep: () => boolean;
	isFinalStep: () => boolean;
	stepList: OnboardingStepListInterface[];
}
export interface OnboardingStepListInterface {
	id: number;
	label: string;
	component: {
		step: React.ComponentType<BaseComponentProps>;
	};
}
