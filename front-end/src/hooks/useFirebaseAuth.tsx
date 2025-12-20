import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/user";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFirebaseAuth = () => {
	const [authUser, setAuthUser] = useState<UserInterface | null>(null);
	const [authUserLoading, setAuhtUserLoading] = useState<boolean>(true);

	//formatage de l'utilisateur firebase
	const formatAuthUser = (user: UserInterface) => ({
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		emailVerified: user.emailVerified,
		phoneNumber: user.phoneNumber,
		photoURL: user.photoURL,
	});

	//recuperation du document firestore
	const getUserDocument = async (user: UserInterface) => {
		if (auth.currentUser) {
			const documentRef = doc(db, "users", auth.currentUser.uid);
			const compactUser = user;

			onSnapshot(documentRef, async (doc) => {
				if (doc.exists()) {
					compactUser.userDocument = doc.data() as UserDocument;
				}
			});
		}
	};

	//ecoute des changement d'authentification
	const autoStatechanged = async (authState: UserInterface | User | null) => {
		if (!authState) {
			setAuthUser(null);
			setAuhtUserLoading(false);
			return;
		}

		setAuhtUserLoading(true);
		const formattedUser = formatAuthUser(authState);
		await getUserDocument(formattedUser);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, autoStatechanged);
		return () => unsubscribe();
	});

	return {
		authUser,
		authUserLoading,
	};
};
