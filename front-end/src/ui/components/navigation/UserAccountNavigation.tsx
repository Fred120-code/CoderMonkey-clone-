import { firebaseLogoutUser } from "@/api/Authentication";
import Box from "@/ui/design-system/box/Box";
import Button from "@/ui/design-system/button/Button";
import Typography from "@/ui/design-system/typography/Typography";
import { toast } from "react-toastify";
import ActiveLink from "./Active-link";
import { useRouter } from "next/router";

const UserAccountNavigation = () => {
	const router = useRouter();

	const handleLogout = async () => {
		const { error } = await firebaseLogoutUser();
		if (error) {
			toast.error(error.message);
			return;
		}

		toast.success("A bientot sur Coders Monkeys");
		// router.push("/connexion")
	};
	return (
		<Box className=" flex flex-col gap-7">
			<div className="flex flex-col gap-3">
				<Typography variant="caption4" weight="medium">
					<ActiveLink href="/mon-espace">Mon compte</ActiveLink>
				</Typography>
				<Typography variant="caption4" weight="medium">
					<ActiveLink href="/mon-espace/mes-projets">
						Mes projets
					</ActiveLink>
				</Typography>
			</div>
			<Button action={handleLogout} variants="danger" size="small">
				Deconnexion
			</Button>
		</Box>
	);
};

export default UserAccountNavigation;
