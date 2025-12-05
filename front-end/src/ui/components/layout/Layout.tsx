import Navigation from "../navigation/Navigation";
import Footer from "../navigation/Footer";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Container from "../container/Container";
import UserAccountNavigation from "../navigation/UserAccountNavigation";

interface Props {
	children: React.ReactNode;
	isDisplayBreadcumbs: boolean;
	withsidebar?: boolean;
}

const Layout = ({
	children,
	isDisplayBreadcumbs = true,
	withsidebar = true,
}: Props) => {
	let view: React.ReactElement = <></>;

	if (withsidebar) {

		view = (
			<Container className="mb-14">
				<div className=" grid grid-cols-12 gpa-7">
					<div className=" col-span-3">
					 <UserAccountNavigation/>
					</div>
					<div className=" col-span-9">
						{children} 
					</div>
				</div>
			</Container>
		)
	} else {
		view = <> {children} </>;
	}

	return (
		<div>
			<Navigation />
			{isDisplayBreadcumbs && <BreadCrumbs />}
			{view}
			<Footer />
		</div>
	);
};

export default Layout;
