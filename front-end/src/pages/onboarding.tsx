import Seo from "@/ui/components/seo/seo";
import { REGISTERED } from "@/lib/session-statut-type";
import Session from "@/ui/components/session/Session";
import OnboardingContainer from "@/ui/modules/onboarding/OnboardingContainer";

export default function Onboarding() {
	return (
		<div>
			<Seo title="Onboarding" description="page d'onboarding" />
			<Session sessionStatut={REGISTERED}>
				<OnboardingContainer/>
			</Session>
		</div>
	);
}
