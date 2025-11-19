import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/navigation";
import Footer from "@/ui/components/navigation/footer"
import Layout from "@/ui/components/layout/layout";

export default function Home() {
	return (
		<div>
			<Seo title="Coders Monkey" description="hello world" />
			<Layout>helle world</Layout>
		</div>
	);
}
