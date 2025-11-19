import Button from "@/ui/design-system/button/Button";
import { footerSocialNetworkLinks } from "./App-links";
import { uuid } from "uuidv4";
import { RiFacebookBoxFill } from "react-icons/ri";
import clsx from "clsx";

interface Props {
	theme?: "gray" | "accent" | "secondary";
	className?: string;
}

export const SocialNetworkButton = ({ className, theme = "accent" }: Props) => {
	const icoList = footerSocialNetworkLinks.map((socialNetwork) => (
		<Button
			key={uuid()}
			variants="ico"
			iconTheme={theme}
			icon={{
				icon: socialNetwork.icon
					? socialNetwork.icon
					: RiFacebookBoxFill,
			}}
			baseUrl={socialNetwork.baseUrl}
			linkType={socialNetwork.type}
		/>
	));
	return (
		<div className={clsx(className, "flex gap-2.5 items-center")}>
			{icoList}
		</div>
	);
};
