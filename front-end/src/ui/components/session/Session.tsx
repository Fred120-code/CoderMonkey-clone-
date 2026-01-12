import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-statut-type";
import { SessionStatutType } from "@/types/SessionStatutType";
import ScreenSpinner from "@/ui/design-system/spinner/ScreenSpinner";
import { useRouter } from "next/router";
import React from "react";

interface Props {
	children: React.ReactNode;
	sessionStatut?: SessionStatutType;
}
const Session = ({ children, sessionStatut }: Props) => {
	const { authUserLoading, authUser } = useAuth();
	const router = useRouter();


	if (sessionStatut === REGISTERED && !authUserLoading) {
		if (authUser) {
			return <>{children}</>;
		} else {
			router.push("/connexion");
		}
	}
	if (sessionStatut === GUEST && !authUserLoading) {
		if (!authUser) {
			return <>{children}</>;
		} else {
			router.push("/mon-espace");
		}
	}
	if (!sessionStatut && !authUserLoading) {
		return <>{children}</>;
	}
    
	return <ScreenSpinner />;
};

export default Session;