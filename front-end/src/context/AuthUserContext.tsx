import { UserDocument } from "@/types/user";
import { createContext, useContext } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

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

export function AuthUserProvider({ children }: Props) {
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

export const useAuth = () => useContext(authUserContext);
