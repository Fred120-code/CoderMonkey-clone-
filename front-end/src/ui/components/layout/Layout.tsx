import Navigation from "../navigation/Navigation";
import Footer from "../navigation/Footer";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

interface Props {
	children: React.ReactNode;
	isDisplayBreadcumbs: boolean;
}

const Layout = ({ children, isDisplayBreadcumbs = true}: Props) => {
	return (
		<div>
			<Navigation />
			{isDisplayBreadcumbs && <BreadCrumbs />}
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
