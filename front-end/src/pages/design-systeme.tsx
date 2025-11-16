//COMPOSANTS
import Container from "@/ui/components/container/container";
import Navigation from "@/ui/components/navigation/navigation";
import Seo from "@/ui/components/seo/seo";

//DESING SYSTEM
import Button from "@/ui/design-system/button/button";
import Avatar from "@/ui/design-system/logo/avatar";
import Logo from "@/ui/design-system/logo/logo";
import Spinner from "@/ui/design-system/spinner/spinner";
import Typography from "@/ui/design-system/typography/typography";

//ICO
import { RiUser6Fill } from "react-icons/ri";

export default function DesingSystem() {
	return (
		<div>
			<Seo title="Desing-systeme" description="hello world" />
			<Navigation />
			<Container className="space-y-10 py-10">
				<div className="flex items-center gap-2 border border-gray-400 rounded p-5">
					<Logo size="very-small" />
					<Logo size="small" />
					<Logo size="medium" />
					<Logo size="large" />
				</div>
				<div className="flex items-center gap-2 border border-gray-400 rounded p-5">
					<Avatar
						size="small"
						src="assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash.png"
						alt="logoAvatar"
					/>
					<Avatar
						size="medium"
						src="assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash.png"
						alt="logoAvatar"
					/>
					<Avatar
						size="large"
						src="assets/images/test.jpg"
						alt="logoAvatar"
					/>
				</div>
				<div className="flex items-center gap-2 border border-gray-400 rounded p-5">
					<Spinner size="small" />
					<Spinner size="medium" />
					<Spinner size="large" />
				</div>
				<div className="flex gap-2 border border-gray-400 rounded p-5">
					<Button
						isloading
						size="small"
						icon={{ icon: RiUser6Fill }}
						iconPosition="right"
					>
						accent
					</Button>
					<Button isloading size="small" variants="accent">
						clique moi
					</Button>
					<Button isloading size="small" variants="secondary">
						clique moi
					</Button>
					<Button isloading size="small" variants="disabled">
						clique moi
					</Button>
					<Button isloading size="small" variants="outline">
						clique moi
					</Button>
					<Button
						isloading
						size="small"
						variants="ico"
						icon={{ icon: RiUser6Fill }}
					/>
					<Button
						size="small"
						variants="ico"
						icon={{ icon: RiUser6Fill }}
						iconTheme="secondary"
					/>
					<Button
						size="small"
						variants="ico"
						icon={{ icon: RiUser6Fill }}
						iconTheme="gray"
					/>
				</div>

				<div className="flex  items-center gap-2 border border-gray-400 rounded p-5">
					<Button size="medium" variants="accent">
						clique moi
					</Button>
					<Button size="medium" variants="secondary">
						clique moi
					</Button>
					<Button size="medium" variants="disabled">
						clique moi
					</Button>
					<Button size="medium" variants="outline">
						clique moi
					</Button>
					<Button
						size="medium"
						variants="ico"
						icon={{ icon: RiUser6Fill }}
					/>
				</div>

				<div className="flex items-center gap-2 border border-gray-400 rounded p-5">
					<Button size="large" variants="accent">
						clique moi
					</Button>
					<Button size="large" variants="secondary">
						clique moi
					</Button>
					<Button size="large" variants="disabled">
						clique moi
					</Button>
					<Button size="large" variants="outline">
						clique moi
					</Button>
					<Button
						size="large"
						variants="ico"
						icon={{ icon: RiUser6Fill }}
					/>
				</div>

				<div className="space-y-5">
					<Typography variant="h1" components="h1" theme="primary">
						Coders Monkey
					</Typography>
					<Typography variant="h2" components="h1" theme="secondary">
						Coders Monkey
					</Typography>
					<Typography variant="h3" components="h1" theme="gray">
						Coders Monkey
					</Typography>
					<Typography variant="lead" components="h1" theme="white">
						Coders Monkey
					</Typography>
					<Typography
						variant="caption4"
						components="h1"
						theme="black"
					>
						Coders Monkey
					</Typography>
					<Typography variant="h4" weight="medium" components="h1">
						Coders Monkey
					</Typography>
				</div>
			</Container>
		</div>
	);
}
