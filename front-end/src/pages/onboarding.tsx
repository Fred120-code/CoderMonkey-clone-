import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/Layout";
import LandingPageContainer from "@/ui/modules/landing-page/components/LandingPageContainer";
import { REGISTERED } from "@/lib/session-statut-type";

export default function Onboarding() {
	return (
		<div>
			<Seo title="Onboarding" description="page d'onboarding" />
			<Layout sessionStatut={REGISTERED}>
				<div className="flex justify-center items-center">
                    Welcome to onboarding
                </div>
			</Layout>
		</div>
	);
}
