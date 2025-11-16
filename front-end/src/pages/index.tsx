import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/navigation";
import Footer from "@/ui/components/navigation/footer"

export default function Home() {
	return (
		<div>
			<Navigation />
			<Seo title="Coders Monkey" description="hello world" />
			<Footer/>
		</div>
	);
}
