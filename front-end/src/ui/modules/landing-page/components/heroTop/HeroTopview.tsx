//IMPORT NEXT
import React from "react";
import Image from "next/image";

//COMPOSANTS
import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Button from "@/ui/design-system/button/Button";

const HeroTopview = () => {
	return (
		<Container className="relative pt-40 pb-52 overflow-hidden">
			<div className="w-full max-w-2xl space-y-5">
				<Typography variant="h1" className="max-w-lg" components="h1">
					Rejoins les singes codeurs !
				</Typography>
				<Typography
					variant="body-lg"
					className="max-w-xl"
					components="p"
					theme="gray"
				>
					Ici on se prends pas la tete mais on code comme des betes !
					Rejoins notres tribu de singes codeurs, partage tes projets
					les plus fous et fais-toi des amis developpeurs
				</Typography>
				<div className="flex gap-4 pt-2.5">
					<Button baseUrl="/connexion/inscription">Commencer</Button>
					<Button baseUrl="" variants="secondary">
						En savoir plus
					</Button>
				</div>
			</div>
			<Image
				src="/assets/svg/rocket.svg"
				alt="rocket"
				width={811}
				height={586}
				className=" absolute right-0 top-0 z-0"
			/>
		</Container>
	);
};

export default HeroTopview;
