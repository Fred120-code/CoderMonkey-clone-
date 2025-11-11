import clsx from "clsx";

interface Props {
	size?: "medium" | "large" | "small";
	variants?: "accent" | "secondary" | "disabled" | "ico" | "outline";
	icon?: any;
	iconTheme?: "accent" | "secondary" | "gray";
	iconPosition?: "left" | "right";
	disabled?: boolean;
	isloading?: boolean;
	children?: React.ReactNode;
}

const button = ({
	size = "medium",
	variants = "accent",
	icon,
	iconTheme = "accent",
	iconPosition = "right",
	disabled,
	isloading,
	children,
}: Props) => {
	let variantStyle: string = "",
		sizeStyle: string = "",
		icoSize: number = 0;

	switch (variants) {
		case "accent": //default
			variantStyle = "";
			break;
		case "secondary":
			variantStyle = "";
			break;
		case "disabled":
			variantStyle = "";
			break;
		case "ico":
			variantStyle = "";
			break;
		case "outline":
			variantStyle = "";
			break;

		default:
			break;
	}

	switch (size) {
		case "medium": //default
			sizeStyle = "";
			break;
		case "large":
			sizeStyle = "";
			break;
		case "small":
			sizeStyle = "";
			break;

		default:
			break;
	}
	return (
		<div>
			<button
				type="button"
				className={clsx(variantStyle, sizeStyle, "")}
				onClick={() => console.log("click")}
				disabled={disabled}
			>
				{children}
			</button>
		</div>
	);
};

export default button;
