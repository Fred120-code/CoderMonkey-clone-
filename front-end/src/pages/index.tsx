import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/navigation";
export default function Home() {
	return (
		<div>
			<Navigation />
			<Seo title="Coders Monkey" description="hello world" />
		</div>
	);
}
