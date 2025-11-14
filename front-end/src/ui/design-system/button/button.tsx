import clsx from "clsx";
import { IconProps } from "@/types/iconProps";

interface Props {
	size?: "medium" | "large" | "small";
	variants?: "accent" | "secondary" | "disabled" | "ico" | "outline";
	icon?: IconProps;
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
			if (iconTheme === "accent") {
				variantStyle =
					"bg-primary hover:bg-primary-400 text-white rounded-full";
			}
			if (iconTheme === "secondary") {
				variantStyle =
					"bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
			}
			if (iconTheme === "gray") {
				variantStyle =
					"bg-gray-700 hover:bg-gray-600 text-white rounded-full";
			}
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
			sizeStyle = `text-caption3 font-medium  ${
				variants === "ico"
					? "flex items-center justify-center w-[40px] h-[40px]"
					: "px-[14px] py-[12px]"
			}`;
			icoSize = 18;
			break;
		case "medium": //default
			sizeStyle = `text-caption2 font-medium  ${
				variants === "ico"
					? "flex items-center justify-center w-[50px] h-[50px]"
					: "px-[18px] py-[15px] "
			}`;
			icoSize = 20;
			break;
		case "large":
			sizeStyle = `text-caption1 font-medium  ${
				variants === "ico"
					? "flex items-center justify-center w-[60px] h-[60px]"
					: "px-[22px] py-[18px]"
			}`;
			icoSize = 24;
			break;

		default:
			break;
	}
	return (
		<div>
			<button
				type="button"
				className={clsx(variantStyle, sizeStyle, icoSize, "")}
				disabled={disabled}
			>
				{icon && variants == "ico" ? (
					<icon.icon size={icoSize} />
				) : (
					<div className={clsx(icon && "flex items-center gap-1")}>
						{icon && iconPosition === "left" && (
							<icon.icon size={icoSize} />
						)}
						{children}
						{icon && iconPosition === "right" && (
							<icon.icon size={icoSize} />
						)}
					</div>
				)}
			</button>
		</div>
	);
};

export default button;
