import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/Navigation";
import Footer from "@/ui/components/navigation/Footer";
import Layout from "@/ui/components/layout/Layout";
import LandingPageContainer from "@/ui/modules/landing-page/components/LandingPageContainer";

export default function Home() {
	return (
		<div>
			<Seo title="Coders Monkey" description="hello world" />
			<Layout>
				<LandingPageContainer />
			</Layout>
		</div>
	);
}
