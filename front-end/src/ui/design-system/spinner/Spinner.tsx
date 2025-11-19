import clsx from "clsx";

interface spinnerProps {
	size?: "small" | "large" | "medium";
	variant?: "primary" | "white";
}

const Spinner = ({ size = "medium", variant = "primary" }: spinnerProps) => {
	let variantStyle: string = "",
		sizeStyle: string = "";

	switch (size) {
		case "small":
			sizeStyle = "w-5 h-5";
			break;
		case "medium": //default
			sizeStyle = "w-9 h-9";
			break;
		case "large":
			sizeStyle = "w-12 h-12";
			break;

		default:
			break;
	}

	switch (variant) {
		case "primary": //default
			variantStyle = "text-primary";
			break;
		case "white":
			variantStyle = "text-white";
			break;

		default:
			break;
	}
	return (
		<svg
			role="spinner"
			viewBox="0 0 24 24"
			className={clsx(sizeStyle, variantStyle, " animate-spin")}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			></circle>{" "}
			<path
				className=" opacity-70"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h-4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824  3 7.938l3-2.647z"
			></path>{" "}
		</svg>
	);
};

export default Spinner;
