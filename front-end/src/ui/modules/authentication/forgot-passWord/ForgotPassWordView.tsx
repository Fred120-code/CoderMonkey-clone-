import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ForgetPwForm from "./ForgetPwForm";
import { FromTypes } from "@/types/form";

interface Props {
	form: FromTypes;
}

const ForgotPassWordView = ({ form }: Props) => {
	return (
		<Container className="grid grid-cols-2 gap-20 mb-32">
			<div className="flex items-center">
				<div className="relative w-full h-[500px]">
					<Image
						fill
						src="/assets/images/character-3.png"
						alt="illustration d'un bonhomme"
						className=" object-scale-down"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<Box padding_y="py-5">
					<div className="flex justify-between items-center">
						<Typography variant="lead" components="h1">
							Mot de passe perdu ?
						</Typography>
						<div className="flex items-center gap-3">
							<Typography
								variant="caption4"
								components="span"
								theme="primary"
							>
								<Link href="/connexion">Connexion</Link>
							</Typography>
						</div>
					</div>
					<ForgetPwForm form={form} />
				</Box>
			</div>
		</Container>
	);
};

export default ForgotPassWordView;
