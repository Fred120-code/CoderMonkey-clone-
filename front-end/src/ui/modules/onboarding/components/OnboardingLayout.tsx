import React from "react";

interface Props {
	children: React.ReactNode;
}
const OnboardingLayout = ({
	children,
}: Props) => {
	return (
		<div className=" relative h-screen pb-[91px]">
			{children}
		</div>
	);
};

export default OnboardingLayout;
