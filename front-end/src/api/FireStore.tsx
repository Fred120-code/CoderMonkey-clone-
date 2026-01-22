import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";


//creation d'un document
export const FirestoreCreateDoc = async (
	collectionName: string,
	documentId: string,
	data: object
) => {
	try {
		const documentRef = doc(db, collectionName, documentId);
		await setDoc(documentRef, data);
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

//modification d'un document
export const FireStoreUpdateDoc = async (
	collectionName: string,
	documentId: string,
	data: object
) => {
	try {
		const documentRef = doc(db, collectionName, documentId);
		await updateDoc(documentRef, data);
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
