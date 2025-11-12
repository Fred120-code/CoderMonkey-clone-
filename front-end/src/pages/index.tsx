import Seo from "@/ui/components/seo";
import Button from "@/ui/design-system/typography/button/button";
import Typography from "@/ui/design-system/typography/typography";

export default function Home() {
	return (
		<div className="flex flex-col items-center gap-5">
			<Seo title="title" description="hello world" />

			<div className="flex justify-center items-center gap-4">
				<Button size="small" variants="accent">clique moi</Button>
				<Button size="small" variants="secondary">clique moi</Button>
				<Button size="small" variants="disabled">clique moi</Button>
				<Button size="small" variants="outline">clique moi</Button>
			</div>

			<div className="flex justify-center items-center gap-4">
				<Button size="medium" variants="accent">clique moi</Button>
				<Button size="medium" variants="secondary">clique moi</Button>
				<Button size="medium" variants="disabled">clique moi</Button>
				<Button size="medium" variants="outline">clique moi</Button>
			</div>

			<div className="flex justify-center items-center gap-4">
				<Button size="large" variants="accent">clique moi</Button>
				<Button size="large" variants="secondary">clique moi</Button>
				<Button size="large" variants="disabled">clique moi</Button>
				<Button size="large" variants="outline">clique moi</Button>
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
