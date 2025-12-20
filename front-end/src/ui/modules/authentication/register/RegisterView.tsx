import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import { FromTypes } from "@/types/form";

interface Props {
	form: FromTypes;
}

const RegisterView = ({ form }: Props) => {
	return (
		<Container className="grid grid-cols-2 gap-20 mb-32">
			<div className="flex items-center">
				<div className="relative w-full h-[500px]">
					<Image
						fill
						src="/assets/images/character-1.png"
						alt="illustration d'un bonhomme"
						className=" object-scale-down"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<Box padding_y="py-5">
					<div className="flex justify-between items-center">
						<Typography variant="lead" components="h1">
							Inscription
						</Typography>
						<div className="flex items-center gap-3">
							<Typography
								variant="caption4"
								components="span"
								theme="gray"
							>
								Tu as déjà un compte ?
							</Typography>
							<Typography
								variant="caption4"
								components="span"
								theme="primary"
							>
								<Link href="/connexion">Connexion</Link>
							</Typography>
						</div>
					</div>
					<RegisterForm form={form} /> 
					<Typography variant="caption4" theme="gray" className="max-w-md mx-auto space-y-1 text-center">
						<div>En t'inscrivant, tu acceptes les</div>
						<div>
							<Link href="/#" className="text-gray">
								Conditions d'utilisation {" "}
							</Link>
							  et la {" "}
							<Link href="/#" className="text-gray">
							 politique de confidentialité
							</Link>
						</div>
					</Typography>
				</Box>
			</div>
		</Container>
	);
};

export default RegisterView;
