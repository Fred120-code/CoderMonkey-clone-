import { BaseComponentProps } from "@/types/OnboardingStepList";

const OnbordingView = ({
	getCurrentStep,
	nextStep,
	prevStep,
	isFirtStep,
	isFinalStep,
	stepList,
}: BaseComponentProps) => {
	if (getCurrentStep()?.component) {
		const Component = getCurrentStep()?.component?.step;
  
		return (
			<div>
				{Component && (
					<Component
						getCurrentStep = {getCurrentStep}
						nextStep = {nextStep}
						prevStep = {prevStep}
						isFirtStep = {isFirtStep}
						isFinalStep = {isFinalStep}
						stepList = {stepList}
					/>
				)}
			</div>
		);
	}

	return null;
};

export default OnbordingView;
