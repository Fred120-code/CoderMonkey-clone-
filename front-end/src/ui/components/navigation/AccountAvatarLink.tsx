import { useAuth } from "@/context/AuthUserContext";
import Avatar from "@/ui/design-system/Avatar/Avatar";
import Typography from "@/ui/design-system/typography/Typography";
import Link from "next/link";
import React from "react";

const AccountAvatarLink = () => {

    const {authUser} = useAuth()
    const {photoURL, displayName} = authUser
	return (
		<Link href="/mon-espace" className="flex items-center gap-2">
			<Avatar src={photoURL} alt="avatar d'un utilisateur" size="large" />
			<div className="max-w-[160px]">
				<Typography
					variant="caption2"
					weight="medium"
					className="truncate"
				>
					Joran Fred
				</Typography>
				<Typography variant="caption4" weight="medium" theme="gray">
					Mon compte
				</Typography>
			</div>
		</Link>
	);
};

export default AccountAvatarLink;
