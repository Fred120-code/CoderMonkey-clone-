import { Timestamp } from "firebase/firestore";

//donnees d'un utilisateur
export interface UserInterface {
	uid: string;
	email: string | null;
	displayName: string | null;
	emailVerified: boolean;
	phoneNumber: string | null;
	photoURL: string | null;
	userDocument?: UserDocument;
}

export interface UserDocument {
	uid: string;
	email: string;
	how_did_hear: string;
	creationDate: Timestamp;
}
