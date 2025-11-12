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
			variantStyle = "bg-primary hover:bg-primary-400 text-white rounded";
			break;
		case "secondary":
			variantStyle =
				"bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
			break;
		case "outline":
			variantStyle =
				"bg-white border border-gray-500 text-gray-900 rounded";
			break;
		case "ico":
			variantStyle = "";
			break;
		case "disabled":
			variantStyle =
				"bg-gray-400 rounded border border-gray-500 text-gray-600 cursor-not-allowed";
			break;

		default:
			break;
	}

	switch (size) {
		case "small":
			sizeStyle = "text-caption3 font-medium px-[14px] py-[11px]";
			break;
		case "medium": //default
			sizeStyle = "text-caption2 font-medium px-[18px] py-[15px]";
			break;
		case "large":
			sizeStyle = "text-caption1 font-medium px-[22px] py-[18px]";
			break;

		default:
			break;
	}
	return (
		<div>
			<button
				type="button"
				className={clsx(variantStyle, sizeStyle, icoSize, "")}
				onClick={() => console.log("click")}
				disabled={disabled}
			>
				{children}
			</button>
		</div>
	);
};

export default button;
