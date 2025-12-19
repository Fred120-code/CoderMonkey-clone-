import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const FireStoreUpdateDoc = async (
	collectionName: string,
	documentId: string,
	data: object
) => {
	try {
		const documentRef = doc(db, collectionName, documentId);
		await updateDoc(documentRef, {
			data,
		});
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
