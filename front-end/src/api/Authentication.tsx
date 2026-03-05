//FONCTIONS FIREBASE
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

//permet de creer un utilisateur
export const firebaseCreateUser = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		return { data: userCredential.user };
	} catch (error) {
		const firebaseError = error as FirebaseError;
		return {
			error: {
				code: firebaseError.code,
				message: firebaseError.message,
			},
		};
	}
};

//permet de connecter un utilisateur à son compte
export const firebaseSignInUser = async (email: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		return { data: userCredential.user };
	} catch (error) {
		const firebaseError = error as FirebaseError;
		return {
			error: {
				code: firebaseError.code,
				message: firebaseError.message,
			},
		};
	}
};

//permet de deconnecter un utilisateur
export const firebaseLogoutUser = async () => {
	try {
		await signOut(auth);
		return { data: true };
	} catch (error) {
		const firebaseError = error as FirebaseError;
		return {
			error: {
				code: firebaseError.code,
				message: firebaseError.message,
			},
		};
	}
};

//permet de reinitialiser l'email de l'utilisateur
export const firebaseSendPasswordResetEmailUser = async (email: string) => {
	try {
		await sendPasswordResetEmail(auth, email);
		return { data: true };
	} catch (error) {
		const firebaseError = error as FirebaseError;
		return {
			error: {
				code: firebaseError.code,
				message: firebaseError.message,
			},
		};
	}
};

//permet d'envoyer un email de confirmation
export const sendEmailVerificationUser = async () => {
	if (auth.currentUser) {
		try {
			await sendEmailVerification(auth.currentUser);
			return { data: true };
		} catch (error) {
			const firebaseError = error as FirebaseError;
			return {
				error: {
					code: firebaseError.code,
					message: firebaseError.message,
				},
			};
		}
	} else {
		return {
			error: {
				code: "unknow",
				message: "l'utilisateur n'est pas authentifié",
			},
		};
	}
};
