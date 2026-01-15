import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot, Unsubscribe } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/user";

export default function useFirebaseAuth() {
	const [authUser, setAuthUser] = useState<UserInterface | null>(null);
	const [authUserLoading, setAuthUserLoading] = useState(true);

	const unsubscribeRef = useRef<Unsubscribe | null>(null);

	const formatAuthUser = (user: User): UserInterface => ({
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		emailVerified: user.emailVerified,
		phoneNumber: user.phoneNumber,
		photoURL: user.photoURL,
		userDocument: undefined,
	});

	const subscribeToUserDocument = (user: UserInterface) => {
		if (unsubscribeRef.current) unsubscribeRef.current();

		const ref = doc(db, "users", user.uid);

		unsubscribeRef.current = onSnapshot(
			ref,
			(snapshot) => {
				const raw = snapshot.exists()
					? (snapshot.data() as any)
					: undefined;
				// Certains documents peuvent contenir les champs sous une clé `data`.
				const src = raw && raw.data ? raw.data : raw;
				let normalizedUserDocument: UserDocument | undefined =
					undefined;
				if (src) {
					normalizedUserDocument = {
						...src,
						onboardingIsCompleted:
							src.onboardingIsCompleted ??
							src.onbordingIsCompleted ??
							false,
					} as UserDocument;
				}

				setAuthUser({
					...user,
					userDocument: normalizedUserDocument,
				});
				setAuthUserLoading(false);
			},
			(error) => {
				console.error("Firestore error:", error);
				setAuthUserLoading(false);
			}
		);
	};

	useEffect(() => {
		const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
			if (!firebaseUser) {
				setAuthUser(null);
				setAuthUserLoading(false);
				if (unsubscribeRef.current) unsubscribeRef.current();
				return;
			}

			setAuthUserLoading(true);
			const formattedUser = formatAuthUser(firebaseUser);
			subscribeToUserDocument(formattedUser);
		});

		return () => {
			unsubscribeAuth();
			if (unsubscribeRef.current) unsubscribeRef.current();
		};
	}, []);

	return { authUser, authUserLoading };
}
