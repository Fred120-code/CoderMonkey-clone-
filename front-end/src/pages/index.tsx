import Seo from "@/ui/components/seo";
import Typography from "@/ui/design-system/typography/typography";

export default function Home() {
	return (
		<div>
			<Seo title="title" description="hello world" />
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
