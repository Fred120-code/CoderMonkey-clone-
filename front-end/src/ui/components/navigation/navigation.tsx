import Logo from "@/ui/design-system/logo/logo";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";
import Link from "next/link";
import ActiveLink from "./active-link";

interface PropsNavigation {}

const navigation = ({}: PropsNavigation) => {
	return (
		<div className="border-b-2 border-gray-400">
			<Container className="py-1.5 flex justify-between items-center gap-7">
				<Link href="/">
					<div className="flex items-center gap-2">
						<Logo size="small" />
						<div className="flex flex-col">
							<div className="text-gray font-extrabold text-[24px]">
								Codeurs Monkeys
							</div>
							<Typography
								variant="caption4"
								theme="gray"
								components="span"
							>
								Trouve de l'inspiration et recois des feedbacks
								!
							</Typography>
						</div>
					</div>
				</Link>
				<div className="flex items-center gap-7">
					<Typography
						variant="caption3"
						components="div"
						className="flex items-center gap-7"
					>
						<ActiveLink href="/design-systeme">
							Design systeme
						</ActiveLink>
						<ActiveLink href="/projets">Projets</ActiveLink>
						<ActiveLink href="/fromations">Fromations</ActiveLink>
						<ActiveLink href="/contacts">Contacts</ActiveLink>
					</Typography>
					<div className="flex items-center gap-2">
						<Button size="small" variants="accent">
							Connexion
						</Button>
						<Button size="small" variants="secondary">
							Rejoindre
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default navigation;
