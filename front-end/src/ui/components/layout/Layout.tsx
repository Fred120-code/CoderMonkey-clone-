import Navigation from "../navigation/Navigation";
import Footer from "../navigation/Footer";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Container from "../container/Container";
import UserAccountNavigation from "../navigation/UserAccountNavigation";
import Session from "../session/Session";
import { SessionStatutType } from "@/types/SessionStatutType";

interface Props {
	children: React.ReactNode;
	isDisplayBreadcumbs?: boolean;
	withsidebar?: boolean;
	sessionStatut?: SessionStatutType;
}

const Layout = ({
	children,
	isDisplayBreadcumbs = true,
	withsidebar = false,
	sessionStatut,
}: Props) => {
	let view: React.ReactElement = <></>;

	if (withsidebar) {
		view = (
			<Container className="mb-14">
				<div className=" grid grid-cols-12 gpa-7">
					<div className=" col-span-3">
						<UserAccountNavigation />
					</div>
					<div className="col-span-9">{children}</div>
				</div>
			</Container>
		);
	} else {
		view = <> {children} </>;
	}

	return (
		<Session sessionStatut={sessionStatut}>
			<Navigation />
			{isDisplayBreadcumbs && <BreadCrumbs />}
			{view}
			<Footer />
		</Session>
	);
};

export default Layout;
