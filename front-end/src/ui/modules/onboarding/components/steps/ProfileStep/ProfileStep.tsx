import { BaseComponentProps } from "@/types/OnboardingStepList";
import React from "react";
import OnboardingFooter from "../../footer/OnboardingFooter";
import Container from "@/ui/components/container/Container";
import OnboardingTabs from "../../tabs/OnboardingTabs";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import OnboardingLayout from "../../OnboardingLayout";

const ProfileStep = ({
	stepList,
	getCurrentStep,
	nextStep,
	prevStep,
	isFinalStep,
	isFirtStep,
}: BaseComponentProps) => {
	return (
		<OnboardingLayout>
			<div className="h-full overflow-auto">
				<Container className="grid grid-cols-12 h-full">
					<div className="relative z-0 flex items-center h-full col-span-6 py-10">
						<div className="w-full space-y-5 pb-4">
							<OnboardingTabs
								tabs={stepList}
								getCurrentStep={getCurrentStep}
							/>
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
								personnaliser ton expérience d'apprentissage et
								te proposer des ressources adaptées à tes
								besoins.
							</Typography>
						</div>
					</div>
					<div className="flex items-center h-full col-span-6">
						<div className="w-full">
							<Image
								src="/assets/svg/rocket.svg"
								alt="rocket"
								width={811}
								height={596}
							/>
						</div>
					</div>
				</Container>
			</div>
			<OnboardingFooter
				nextStep={nextStep}
				prevStep={prevStep}
				isFinalStep={isFinalStep}
				isFirtStep={isFirtStep}
			/>
		</OnboardingLayout>
	);
};

export default ProfileStep;
