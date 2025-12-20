import { auth } from "@/config/firebase-config";
import { UserDocument } from "@/types/user";
import { createContext, useContext } from "react";
import { useFirebaseAuth } from "./useFirebaseAuth";

const init = {
	uid: "",
	email: "",
	displayName: "",
	emailVerified: false,
	phoneNumber: "",
	photoURL: "",
	userDocument: {} as UserDocument,
};

const authUserContext = createContext({
	authUser: init,
	authUserLoading: true,
});

interface Props {
	children: React.ReactNode;
}

export function authUserProvider({ children }: Props) {
	const auth = useFirebaseAuth();
	return (
		<authUserContext.Provider
			value={{
				authUser: auth.authUser as {
                    uid: string;
                    email: string;
                    displayName: string;
                    emailVerified: boolean;
                    phoneNumber: string;
                    photoURL: string;
                    userDocument: UserDocument;
                },
				authUserLoading: auth.authUserLoading,
			}}
		>
			{children}
		</authUserContext.Provider>
	);
}

export const useAuth = ()=> useContext(authUserContext)