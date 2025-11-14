interface spinnerProps {
	size?: "small" | "large" | "medium";
	variant?: "primary" | "white";
}

const Spinner = ({ size = "medium", variant = "primary" }: spinnerProps) => {
	let variantStyle: string = "",
		sizeStyle: string = "";

	switch (size) {
		case "small":
			sizeStyle = "";
			break;
		case "medium": //default
			sizeStyle = "";
			break;
		case "large":
			sizeStyle = "";
			break;

		default:
			break;
	}

	switch (variant) {
		case "primary": //default
			variantStyle = "";
			break;
		case "white":
			variantStyle = "";
			break;

		default:
			break;
	}
	return (
		<svg
			viewBox="0 0 14 14"
            className="w-20 h-20"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<g fill="none" fill-rule="evenodd">
					{" "}
					<circle
						cx="7"
						cy="7"
						r="6"
						stroke="#000000"
						stroke-opacity=".1"
						stroke-width="2"
					></circle>{" "}
					<path
						fill="#000000"
						fill-opacity=""
						fill-rule="nonzero"
						d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"
					></path>{" "}
				</g>{" "}
			</g>
		</svg>
	);
};

export default Spinner;
