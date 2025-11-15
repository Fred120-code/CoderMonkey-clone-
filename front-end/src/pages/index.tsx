import Seo from "@/ui/components/seo";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import { RiUser6Fill } from "react-icons/ri";
import Spinner from "@/ui/design-system/spinner/spinner";

export default function Home() {
	return (
		<div className="flex flex-col justify-center  gap-5 mt-10 ml-10">
			<Seo title="title" description="hello world" />
			<div className="flex items-center gap-4">
				<Spinner size="small" />
				<Spinner size="medium" />
				<Spinner size="large" />
			</div>
			<div className="flex  gap-4">
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

			<div className="flex  items-center gap-4">
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

			<div className="flex items-center gap-4">
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
				<Typography variant="caption4" components="h1" theme="black">
					Coders Monkey
				</Typography>
				<Typography variant="h4" weight="medium" components="h1">
					Coders Monkey
				</Typography>
			</div>
		</div>
	);
}
