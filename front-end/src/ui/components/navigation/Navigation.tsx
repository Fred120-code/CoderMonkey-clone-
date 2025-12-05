import Logo from "@/ui/design-system/logo/Logo";
import Container from "../container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Button from "@/ui/design-system/button/Button";
import Link from "next/link";
import ActiveLink from "./Active-link";

interface PropsNavigation {}

const navigation = ({}: PropsNavigation) => {
	return (
		<div className="border-b-2 border-gray-400">
			<Container className="py-1.5 flex justify-between items-center gap-7">
				<Link href="/">
					<div className="flex items-center gap-2">
						<Logo size="very-small" />
						<div className="flex flex-col">
							<div className="text-gray font-extrabold text-[20px]">
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
						variant="caption4"
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
						<Button
							size="small"
							variants="accent"
							baseUrl="/connexion"
						>
							Connexion
						</Button>
						<Button
							size="small"
							variants="secondary"
							baseUrl="/connexion/inscription"
						>
							Rejoindre
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default navigation;
