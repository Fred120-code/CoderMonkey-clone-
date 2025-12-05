import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/Navigation";
import Footer from "@/ui/components/navigation/Footer";
import Layout from "@/ui/components/layout/Layout";
import RegisterContainer from "@/ui/modules/authentication/register/Register-Container";

export default function Inscription() {
	return (
		<div>
			<Seo
				title="Inscription à la plateforme"
				description="page d'inscription"
			/>
			<Layout isDisplayBreadcumbs={true} withsidebar = {false}>
                <RegisterContainer/>
            </Layout>
		</div>
	);
}
