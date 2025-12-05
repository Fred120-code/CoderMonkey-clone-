import clsx from "clsx";
import { IconProps } from "@/types/iconProps";
import Spinner from "../spinner/Spinner";
import { LinkType, Linktypes } from "@/lib/link-types";
import Link from "next/link";

interface Props {
	size?: "medium" | "large" | "small";
	variants?:
		| "accent"
		| "secondary"
		| "disabled"
		| "ico"
		| "outline"
		| "success"
		| "danger";
	icon?: IconProps;
	iconTheme?: "accent" | "secondary" | "gray";
	iconPosition?: "left" | "right";
	disabled?: boolean;
	isloading?: boolean;
	children?: React.ReactNode;
	baseUrl?: string;
	linkType?: Linktypes;
	action?: Function;
	type?: "button" | "submit";
	fullWidth?: boolean;
}

const Button = ({
	size = "medium",
	variants = "accent",
	icon,
	iconTheme = "accent",
	iconPosition = "right",
	disabled,
	isloading,
	children,
	baseUrl,
	linkType = "internal",
	action = () => {},
	type = "button",
	fullWidth = false,
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
					"bg-gray-800 hover:bg-gray-700 text-white rounded-full";
			}
			break;
		case "disabled":
			variantStyle =
				"bg-gray-400 rounded border border-gray-500 text-gray-600 cursor-not-allowed";
			break;
		case "success":
			variantStyle =
				"bg-secondary hover:bg-secondary-400 text-white rounded";
		case "danger":
			variantStyle =
				"bg-alert-danger hover:bg-alert-danger/75  text-white rounded";

		default:
			break;
	}

	switch (size) {
		case "small":
			sizeStyle = `text-caption4 font-medium  ${
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

	const handleclick = () => {
		if (action) {
			action();
		}
	};

	const buttonContent = (
		<>
			{isloading && (
				<div className="absolute inset-0 flex justify-center items-center">
					{variants === "accent" || variants === "ico" ? (
						<Spinner size="small" variant="white" />
					) : (
						<Spinner size="small" />
					)}
				</div>
			)}
			<div className={clsx(isloading && "invisible")}>
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
			</div>
		</>
	);

	const buttonElement = (
		<>
			<div>
				<button
					type={type}
					disabled ={disabled || isloading ? true : false}
					onClick={handleclick}
					className={clsx(
						variantStyle,
						sizeStyle,
						icoSize,
						isloading && "cursor-wait",
						fullWidth && "w-full",
						"relative animate"
					)}
				>
					{buttonContent}
				</button>
			</div>
		</>
	);

	if (baseUrl) {
		if (linkType === LinkType.EXTERNAL) {
			return (
				<a href={baseUrl} target="_blank">
					{buttonElement}
				</a>
			);
		} else if (linkType === LinkType.INTERNAL) {
			return <Link href={baseUrl}>{buttonElement}</Link>;
		}
	}

	return buttonElement;
};

export default Button;
