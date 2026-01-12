import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/Layout";
import ForgotPWContainer from "@/ui/modules/authentication/forgot-passWord/ForgotPW-Container";
import { GUEST } from "@/lib/session-statut-type";

export default function ForgotPassWord() {
	return (
		<div>
			<Seo
				title="Recuparetion du mot de passe"
				description="page de recuperation du mot de passe"
			/>
			<Layout isDisplayBreadcumbs={true} withsidebar={false} sessionStatut={GUEST}>
				<ForgotPWContainer />
			</Layout>
		</div>
	);
}
