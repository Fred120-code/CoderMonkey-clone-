interface Props {
	varainte?:
		| "display"
		| "h1"
		| "h3"
		| "h4"
		| "h5"
		| "lead"
		| "body-lg"
		| "body-base"
		| "body-sm"
		| "caption1"
		| "caption2"
		| "caption3";
	components?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
	children: React.ReactNode;
}

const typography = ({
	varainte,
	components: Component = "div",
	children,
}: Props) => {
	return <Component>{children}</Component>;
};

export default typography;
