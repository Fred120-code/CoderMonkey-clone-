import { BaseComponentProps } from "@/types/OnboardingStepList";
import React from "react";
import OnboardingFooter from "../../footer/OnboardingFooter";
import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";

const WelcomeStep = ({
	nextStep,
	isFinalStep,
	isFirtStep,
}: BaseComponentProps) => {
	return (
		<div className="relative h-screen pb-[91px]">
			<div className="h-full overflow-auto">
				<Container className="grid grid-cols-12 h-full">
					<div className="relative z-0 flex items-center h-full col-span-6 py-10">
						<div className="w-full space-y-5 pb-4">
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
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Repellat veniam ad
								consequuntur dolorem fugiat ipsum quibusdam
								magnam provident quaerat! Distinctio ut fugiat
								perspiciatis error recusandae magnam quis
								maiores vitae
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
								// className=" absolute right-0 z-0 rounded-[10px]"
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
		</div>
	);
};

export default WelcomeStep;
