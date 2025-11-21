import Container from "@/ui/components/container/Container";
import { v4 as uuidv4 } from "uuid";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import Button from "@/ui/design-system/button/Button";
import { RiArrowRightFill, RiArrowRightLine } from "react-icons/ri";
import { SocialNetworkButton } from "@/ui/components/navigation/Social-network-button";

interface FeaturesList {
	imagePath: string;
	imageAlt: string;
	title: string;
	description: string;
}

const featuresData: FeaturesList[] = [
	{
		imagePath: "/assets/svg/diskette.svg",
		imageAlt: "illustration",
		title: "Ressources",
		description: "Consulte et partage des ressources pour les devs",
	},
	{
		imagePath: "/assets/svg/joystick.svg",
		imageAlt: "illustration",
		title: "Entrainement",
		description:
			"Entraine-toi à devenir meilleur et à trouver l'inspiration",
	},
	{
		imagePath: "/assets/svg/loudspeaker.svg",
		imageAlt: "illustration",
		title: "Visibilité",
		description: "Expose des projet et crée-toi des opportunités !",
	},
	{
		imagePath: "/assets/svg/compass.svg",
		imageAlt: "illustration",
		title: "Relations",
		description: "Connecte-toi avec des devs web et booste ta carrière !",
	},
];

const Featured = () => {
	const featuredList = featuresData.map((element) => (
		<div
			key={uuidv4()}
			className=" flex flex-col items-center justify-center bg-white rounded p-7"
		>
			<div className="w-[130px] h-[130px] rounded-full mb-6 p-10 relative overflow-hidden">
				<Image
					src={element.imagePath}
					alt={element.imageAlt}
					fill
					className="object-scale-down "
				/>
				<Image
					src={element.imagePath}
					alt={element.imageAlt}
					fill
					className="object-scale-down blur-2xl"
				/>
			</div>
			<Typography
				variant="lead"
				components="h3"
				weight="medium"
				className="text-center mb-2.5"
			>
				{element.title}
			</Typography>
			<Typography
				variant="body-base"
				components="p"
				weight="medium"
				theme="gray"
				className="text-center"
			>
				{element.description}
			</Typography>
		</div>
	));

	return (
		<div className="bg-gray-300">
			<Container className="grid grid-cols-12 gap-24 py-24">
				<div className=" col-span-7 grid grid-cols-2 gap-7">
					{featuredList}
				</div>
				<div className=" col-span-5 flex flex-col justify-between gap-10">
					<div>
						<Typography
							variant="h2"
							components="h2"
							className="mb-5"
						>
							Deviens un développeur web compétent
						</Typography>
						<Typography
							variant="body-lg"
							theme="gray"
							components="p"
							className="mb-8"
						>
							Inscris-toi pour accéder à des avantages exclusifs,
							des ressources, du soutien personnalisé, et des
							formations conçues pour faire de toi un développeur
							pro. {""}
						</Typography>
						<Button
							variants="secondary"
							baseUrl="/#"
							icon={{ icon: RiArrowRightLine }}
							iconPosition="right"
						>
							Commencer
						</Button>
					</div>
					<div className="">
						<Typography
							variant="caption3"
							theme="gray"
							components="p"
							className="mb-4"
						>
							Nos reseaux sociaux {""}
						</Typography>
						<SocialNetworkButton/>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Featured;
