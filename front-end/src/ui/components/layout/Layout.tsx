import Navigation from "../navigation/Navigation";
import Footer from "../navigation/Footer";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
