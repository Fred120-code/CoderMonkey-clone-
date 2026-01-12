import clsx from "clsx";
import Image from "next/image";

interface PropsLogo {
	size?: "small" | "medium" | "large";
	src: string;
	alt: string;
}

const Avatar = ({ size = "medium", src, alt }: PropsLogo) => {
	let sizeLogo: string = "";

	switch (size) {
		case "small":
			sizeLogo = "w-[24px] h-[24px]";
			break;
		case "medium":
			sizeLogo = "w-[34px] h-[34px]";
			break;
		case "large":
			sizeLogo = "w-[50px] h-[50px]";
			break;

		default:
			break;
	}

	return (
		<div className={clsx(sizeLogo, "bg-gray-400 rounded-full relative")}>
			<Image
				fill
				src={src ? src : "/assets/svg/barrel.svg"}
				alt={alt}
				className="rounded-full object-center object-cover"
			/>
		</div>
	);
};

export default Avatar;
