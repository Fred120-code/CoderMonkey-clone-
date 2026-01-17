import { OnboardingStepListInterface } from "@/types/OnboardingStepList";
import Typography from "@/ui/design-system/typography/Typography";
import clsx from "clsx";
import React from "react";

interface Props {
	tabs: OnboardingStepListInterface[];
	getCurrentStep: () => OnboardingStepListInterface | undefined;
}
const OnboardingTabs = ({ tabs, getCurrentStep }: Props) => {
	console.log("tabs", tabs);
	console.log("getCurrentStep", getCurrentStep());
	return (
		<div className=" relative inline-block">
			<div className="flex items-center space-x-6">
				{tabs &&
					tabs.map((tab) => (
						<div
							key={tab.id}
							className={clsx(
								getCurrentStep &&
									getCurrentStep()?.id === tab.id
									? "border-primary"
									: "border-gray-400",
								"relative z-10 py-2 border-b-[2px]"
							)}
						>
							<Typography
								variant="caption3"
								weight="medium"
								theme={
									getCurrentStep &&
									getCurrentStep()?.id === tab.id
										? "primary"
										: "gray"
								}
							>
								{tab.label}
							</Typography>
						</div>
					))}
			</div>
			<div className=" absolute bottom-0 left-0 w-full h-[2px] bg-gray-400 "></div>
		</div>
	);
};

export default OnboardingTabs;
