import clsx from "clsx";
import logoMonkey from "public/assets/svg/logo.svg";

export interface PropsLogo {
	size?: "very-small" | "small" | "medium" | "large";
}

console.log(logoMonkey)
const Logo = ({ size= "medium" }: PropsLogo) => {
	let sizeLogo: number = 0;

	switch (size) {
		case "very-small":
			sizeLogo = 34;
			break;
		case "small":
			sizeLogo = 61;
			break;
		case "medium":
			sizeLogo = 88;
			break;
		case "large":
			sizeLogo = 140;
			break;

		default:
			break;
	}
	const src =
		typeof logoMonkey === "string"
			? (logoMonkey as string)
			: (logoMonkey as any)?.src ?? (logoMonkey as any)?.default ?? "";

	return (
		<div>
			<img
				src={src || `/assets/svg/logo.svg`}
				alt="logoMonkey"
				style={{ width: `${sizeLogo}px`, height: "auto" }}
			/>
		</div>
	);
};

export default Logo;
