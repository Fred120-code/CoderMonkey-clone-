import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/Navigation";
import Footer from "@/ui/components/navigation/Footer";
import Layout from "@/ui/components/layout/Layout";
import ForgotPWContainer from "@/ui/modules/authentication/forgot-passWord/ForgotPW-Container";

export default function ForgotPassWord() {
	return (
		<div>
			<Seo
				title="Recuparetion du mot de passe"
				description="page de recuperation du mot de passe"
			/>
			<Layout isDisplayBreadcumbs={true} withsidebar={false}>
				<ForgotPWContainer />
			</Layout>
		</div>
	);
}
