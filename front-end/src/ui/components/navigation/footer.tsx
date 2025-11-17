//COMPOSANTS
import Container from "../container/container";
import { footerApplicationLinks } from "./app-links";
import { footerInformationsLinks } from "./app-links";
import { footerUsersLinks } from "./app-links";
import { footerSocialNetworkLinks } from "./app-links";

//DESIGN SYSTEME
import Typographie from "@/ui/design-system/typography/typography";

//IMPORT NEXTJS
import Image from "next/image";
import Link from "next/link";

const footer = () => {
	const footerApplicationLink = () => {
		return footerApplicationLinks.map((element) => (
			<Typographie variant="caption4" theme="gray" weight="medium">
				<Link href={element.baseUrl}>{element.label} </Link>
			</Typographie>
		));
	};

	const footerInformationLink = () => {
		return footerInformationsLinks.map((element) => (
			<Typographie variant="caption4" theme="gray" weight="medium">
				<Link href={element.baseUrl}>{element.label} </Link>
			</Typographie>
		));
	};

	const footerUsersLink = () => {
		return footerUsersLinks.map((element) => (
			<Typographie variant="caption4" theme="gray" weight="medium">
				<Link href={element.baseUrl}>{element.label} </Link>
			</Typographie>
		));
	};

	const footerSocialNetworkLink = () => {
		return footerSocialNetworkLinks.map((element) => (
			<Typographie variant="caption4" theme="gray" weight="medium">
				<Link href={element.baseUrl}>{element.label} </Link>
			</Typographie>
		));
	};

	return (
		<div className="bg-gray ">
			<Container className="flex justify-between pt-16 items-center">
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

				<div className="space-x-9 flex ">
					<div className="flex flex-col gap-6">
						<Typographie variant="caption3" theme="white">
							App
						</Typographie>
						<div className="flex flex-col gap-4">
							{footerApplicationLink()}
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<Typographie variant="caption3" theme="white">
							Utilisateur
						</Typographie>
						<div className="flex flex-col gap-4">
							{footerUsersLink()}
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<Typographie variant="caption3" theme="white">
							Informations
						</Typographie>
						<div className="flex flex-col gap-4">
							{footerInformationLink()}
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<Typographie variant="caption3" theme="white">
							Réseaux
						</Typographie>
						<div className="flex flex-col gap-4">
							{footerSocialNetworkLink()}
						</div>
					</div>
				</div>
			</Container>

			<Container className="pt-9 pb-11 space-y-11">
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
					<div></div>
				</div>
			</Container>
		</div>
	);
};

export default footer;
