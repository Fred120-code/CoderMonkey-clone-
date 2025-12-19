import { auth } from "@/config/firebase-config";
import { UserInterface } from "@/types/user";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function userFirebaseAuth() {
	const [authUser, setAuthUser] = useState<UserInterface | null>(null);
	const [authUserIsLoading, setAuthUserIsloading] = useState<boolean>(true);

	const formatAuthUser = (user: UserInterface) => ({
		uid: user.uid,
		email: user.email,
		displayName: user.displayName,
		emailVerified: user.emailVerified,
		phoneNumber: user.phoneNumber,
		photoURL: user.photoURL,
	});

	const autoStateChanged = async (authState: UserInterface | User | null) => {
		if (!authState) {
			setAuthUser(null);
			setAuthUserIsloading(false);
			return;
		}
		setAuthUserIsloading(true);
        const formatedUser = formatAuthUser(authState);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, autoStateChanged);

		return () => unsubscribe();
	}, []);

	return {
		authUser,
		authUserIsLoading,
	};
}
