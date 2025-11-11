import Seo from "@/ui/components/seo";
import Typography from "@/ui/design-system/typography/typography";

export default function Home() {
	return(
		<div>
			<Seo title="title" description="hello world"/>
			<Typography components="h1">
				Coders Monkey
			</Typography>
		</div>
	)
}
