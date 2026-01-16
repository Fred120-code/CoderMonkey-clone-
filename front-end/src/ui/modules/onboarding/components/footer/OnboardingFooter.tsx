import Button from "@/ui/design-system/button/Button";
import clsx from "clsx";

interface Props {
	nextStep?: () => void;
	prevStep?: () => void;
	isFirtStep?: () => boolean;
	isFinalStep?: () => boolean;
	isLoading?: boolean;
}

const OnboardingFooter = ({
	nextStep,
	prevStep,
	isFirtStep,
	isFinalStep,
	isLoading,
}: Props) => {
	let actionButtonTitle: string;

	if (isFirtStep && isFirtStep()) {
		actionButtonTitle = "Démarrer";
	} else if (isFinalStep && isFinalStep()) {
		actionButtonTitle = "Terminer";
	} else {
		actionButtonTitle = "Continuer";
	}
	return (
		<div className=" absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400 ">
			<div
				className={clsx(
					prevStep && !nextStep && "justify-start",
					prevStep && nextStep && "justify-between",
					!prevStep && nextStep && "justify-end",
					"flex items-center gap-5 max-w-7xl mx-auto "
				)}
			>
				{prevStep && (
					<Button
						disabled={isLoading}
						variants={!isLoading ? "outline" : "disabled"}
						action={prevStep}
					>
						Retour
					</Button>
				)}

				{nextStep && (
					<Button isloading={isLoading} action={nextStep}>
						{actionButtonTitle}
					</Button>
				)}
			</div>
		</div>
	);
};

export default OnboardingFooter;
