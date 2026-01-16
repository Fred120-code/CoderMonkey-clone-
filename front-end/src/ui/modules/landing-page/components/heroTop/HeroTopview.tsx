//IMPORT NEXT
import React from "react";
import Image from "next/image";

//COMPOSANTS
import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Button from "@/ui/design-system/button/Button";

const HeroTopview = () => {
	return (
		<Container className="relative pt-40 pb-52 overflow-hidden flex items-center">
			<div className="w-full max-w-2xl space-y-5">
				<Typography variant="h2" className="max-w-2xl" components="h3">
					Embarque dans un parcours de développeur web Full-Stack.{" "}
				</Typography>
				<Typography
					variant="body-base"
					className="max-w-xl"
					components="p"
					theme="gray"
				>
					En t'inscrivant, tu bénéficies d'un accès exclusif à du
					contenu complémentaire en lien avec mes vidéos, des
					ressources, des Starter Kits, et bien plus encore.
				</Typography>
				<div className="flex gap-4 pt-2.5">
					<Button baseUrl="/connexion/inscription" size="medium">
						Commencer
					</Button>
					<Button baseUrl="" variants="secondary" size="medium">
						En savoir plus
					</Button>
				</div>
			</div>
			<Image
				src="/assets/svg/rocket2.png"
				alt="rocket"
				width={450}
				height={450}
				className=" absolute right-0 z-0 rounded-[10px]"
			/>
		</Container>
	);
};

export default HeroTopview;
