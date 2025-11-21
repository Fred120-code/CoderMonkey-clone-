import { LinkType } from "@/lib/link-types";
import Container from "@/ui/components/container/Container";
import Button from "@/ui/design-system/button/Button";
import Logo from "@/ui/design-system/logo/Logo";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import React from "react";

const CodeurSlack = () => {
	return (
		<Container className="flex justify-between ">
			<div className="flex flex-col justify-center max-w-2xl space-y-5">
				<div className="flex gap-2 items-center ">
					<Logo size="very-small" />
					<Typography
						variant="caption2"
						components="span"
						weight="medium"
					>
						Coders Monkeys
					</Typography>
				</div>
				<Typography variant="h2" components="h2">
					Rejoins-nous sur le slack des singes codeurs
				</Typography>
				<Typography
					variant="body-lg"
					components="p"
					theme="gray"
					className="max-w-lg"
				>
					Rejoins-nous et obtient de l'aide, des conseils et pourquoi
					pas de nousveaus potes
				</Typography>
				<Button baseUrl="/#" linkType={LinkType.EXTERNAL}>
					Rejoins le groupe d'aide
				</Button>
			</div>
			<div className="relative w-[600px] h-[600px]">
				<Image fill src="/assets/svg/logo-slack.svg" alt="logo-slack" />
			</div>
		</Container>
	);
};

export default CodeurSlack;
