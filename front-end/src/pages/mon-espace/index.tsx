import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/Layout";
import LoginContainer from "@/ui/modules/authentication/login/Login-Container";
import UserAccountContainer from "@/ui/modules/user-profile/user-account/UserAccountContainer";

export default function Connexion() {
	return (
		<div>
			<Seo
				title="Mon espace"
				description="Mon espace personnel"
			/>
			<Layout isDisplayBreadcumbs={true}>
                <UserAccountContainer/>
			</Layout>
		</div>
	);
}
