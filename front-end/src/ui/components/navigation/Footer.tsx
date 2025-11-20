//COMPOSANTS
import Container from "../container/Container";
import { footerLink } from "./App-links";
import ActiveLink from "./Active-link";
import { FooterLinks } from "@/types/app-links";

//DESIGN SYSTEME
import Typographie from "@/ui/design-system/typography/Typography";

//IMPORT NEXTJS ET UTILITAIRES
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { LinkType } from "@/lib/link-types";
import { SocialNetworkButton } from "./Social-network-button";

const footer = () => {
	const footerNavigationLinks = footerLink.map((element) => (
		<FooterLink key={uuidv4()} data={element} />
	));

	return (
		<div className="bg-gray">
			<Container className="flex justify-between pt-11 ">
				<div className="flex items-center flex-col gap-1">
					<Typographie
						variant="caption1"
						theme="white"
						weight="medium"
					>
						Formation gratuite
					</Typographie>
					<Typographie variant="caption3" theme="gray">
						Abonne-toi à la chaine
					</Typographie>
					<a href="#/" target="_blank">
						<Image
							src="/assets/svg/YTB.svg"
							alt="youtubeLogo"
							width={229}
							height={216}
						/>
					</a>
				</div>
				<div className="flex">{footerNavigationLinks}</div>
			</Container>

			<Container className=" pb-8 space-y-5">
				<hr className="text-gray-800" />
				<div className="flex justify-between items-center">
					<Typographie variant="caption4" theme="gray">
						{`Copyrigth 2025 | Propulsed by`} {""}
						{
							<a
								href="https://github.com/Fred120-code"
								target="_blank"
							>
								Joran Fred
							</a>
						}
						{`- DevFullstack`}
					</Typographie>
					<div>
						<SocialNetworkButton theme="gray" />
					</div>
				</div>
			</Container>
		</div>
	);
};

interface footerLink {
	data: FooterLinks;
}

const FooterLink = ({ data }: footerLink) => {
	const LinkList = data.links.map((element) => (
		<div key={uuidv4()}>
			{element.type === LinkType.INTERNAL && (
				<ActiveLink href={element.baseUrl}> {element.label}</ActiveLink>
			)}
			{element.type === LinkType.EXTERNAL && (
				<a href={element.baseUrl} target="_blank">
					{element.label}
				</a>
			)}
		</div>
	));

	return (
		<div className="min-w-[150px]">
			<Typographie
				theme="white"
				variant="caption3"
				weight="medium"
				className="pb-5"
			>
				{data.label}
			</Typographie>
			<Typographie variant="caption4" theme="gray" className="space-y-4">
				{LinkList}
			</Typographie>
		</div>
	);
};
export default footer;
