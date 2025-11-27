import Container from "@/ui/components/container/Container";
import Button from "@/ui/design-system/button/Button";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import React from "react";
import {
	RiArrowRightFill,
	RiArrowRightLine,
	RiCheckboxCircleLine,
} from "react-icons/ri";

const HighLightList = () => {
	return (
		<Container className="py-24 space-y-10">
			<div className="flex justify-center gap-24">
				<div className="w-[520px] h-[350px] relative mt-10">
					<Image fill src="/assets/svg/cake.svg" alt="cake" />
				</div>
				<div className="max-w-md space-y-7">
					<Typography variant="h3" components="h2">
						De novice à developpeur en un clin d'oeil
					</Typography>
					<div className="space-y-3">
						<ListPoint> Progresse rapidement.</ListPoint>
						<ListPoint> Inspire-toi.</ListPoint>
						<ListPoint> Gagne de l'assurance.</ListPoint>
					</div>
					<div className=" relative inline-block">
						<Button
							baseUrl="/connexion"
							icon={{ icon: RiArrowRightLine }}
							iconPosition="right"
						>
							Let's go
						</Button>
						<Image
							width={25}
							height={27}
							src="/assets/svg/cursor.svg"
							alt="illustration d'un curseur de souris.."
							className="absolute right-7 -bottom-5"
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-24">
				<div className="max-w-md space-y-7">
					<Typography variant="h3" components="h2">
						Booste ta carrière de developpeur !
					</Typography>
					<div className="space-y-3">
						<ListPoint>
							{" "}
							Partage tes projets, obtient des feedbacks.
						</ListPoint>
						<ListPoint>
							{" "}
							Connecte-toi, et alargie ton réseaux pro.
						</ListPoint>
						<ListPoint>
							{" "}
							Reste inspiré et motivé avec notre communauté.
						</ListPoint>
					</div>
					<div className=" relative inline-block">
						<Button
							baseUrl="/connexion"
							icon={{ icon: RiArrowRightLine }}
							iconPosition="right"
							variants="secondary"
						>
							Démarer
						</Button>
					</div>
				</div>
				<div className="w-[520px] h-[350px] relative mt-10">
					<Image fill src="/assets/svg/top.svg" alt="toupi" />
				</div>
			</div>
		</Container>
	);
};

export default HighLightList;

interface Props {
	children: React.ReactNode;
}

const ListPoint = ({ children }: Props) => {
	return (
		<div className="flex items-start gap-3">
			<RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
			<Typography variant="body-lg" components="span">
				{children}
			</Typography>
		</div>
	);
};
