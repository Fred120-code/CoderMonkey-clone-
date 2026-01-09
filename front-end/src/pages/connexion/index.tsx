import Seo from "@/ui/components/seo/seo";
import Navigation from "@/ui/components/navigation/Navigation";
import Footer from "@/ui/components/navigation/Footer";
import Layout from "@/ui/components/layout/Layout";
import LoginContainer from "@/ui/modules/authentication/login/Login-Container";
import { GUEST } from "@/lib/session-statut-type";

export default function Connexion() {
	return (
		<div>
			<Seo title="Conexion à la plateforme" description="page de connexion" />
			<Layout isDisplayBreadcumbs={true} withsidebar = {false} sessionStatut={GUEST}>
                <LoginContainer/>
			</Layout>
		</div>
	);
}
