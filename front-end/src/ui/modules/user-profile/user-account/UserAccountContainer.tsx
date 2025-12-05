import { firebaseLogoutUser } from "@/api/Authentication"
import Button from "@/ui/design-system/button/Button"
import { toast } from "react-toastify"

const UserAccountContainer = () => {

    const handleLogout = async () => {
        const { error} =  await firebaseLogoutUser()
        if(error) {
            toast.error(error.message)
            return
        }

        toast.success("A bientot sur Coders Monkeys")
    }
  return (
		<div className="flex justify-center pt-20 pb-40">
			<Button action={handleLogout} variants="danger">
				Deconnexion
			</Button>
		</div>
  );
}

export default UserAccountContainer