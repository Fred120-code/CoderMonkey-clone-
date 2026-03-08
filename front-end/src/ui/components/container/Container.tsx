import clsx from "clsx";

interface PropsContainer {
	children: React.ReactNode;
	className?: string;
}

const Container = ({ children, className }: PropsContainer) => {
	return (
		<div className={clsx(className, "w-full px-5 lg:px-10 max-w-7xl mx-auto ")}>
			{children}
		</div>
	);
};

export default Container;
