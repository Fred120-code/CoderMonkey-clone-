import { BaseComponentProps } from "@/types/OnboardingStepList";
import React from "react";
import OnboardingFooter from "../../footer/OnboardingFooter";
import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import OnboardingTabs from "../../tabs/OnboardingTabs";
import OnboardingLayout from "../../OnboardingLayout";

const WelcomeStep = ({
	nextStep,
	isFinalStep,
	isFirtStep,
	stepList,
	getCurrentStep,
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
								Bienvenue sur l'app des {}
								<Typography
									components="span"
									variant="h2"
									theme="primary"
								>
									Developpeurs FullStack
								</Typography>
							</Typography>
							<Typography
								variant="body-base"
								components="p"
								theme="gray"
							>
								Rejoins une communauté de développeurs
								passionnés et commence ton parcours
								d'apprentissage. Accélère ta progression avec
								des cours, des projets concrets et des mentors
								expérimentés.
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
				isFinalStep={isFinalStep}
				isFirtStep={isFirtStep}
			/>
		</OnboardingLayout>
	);
};

export default WelcomeStep;
