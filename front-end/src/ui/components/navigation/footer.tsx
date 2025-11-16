import Container from "../container/container";
import Typographie from "@/ui/design-system/typography/typography";
import Image from "next/image";

const footer = () => {
	return (
		<div className="bg-gray ">
			<Container className="flex justify-between pt-16">
				<div className="flex items-center flex-col gap-1">
					<Typographie
						variant="caption1"
						theme="white"
						weight="medium"
					>
						Formation gratuite
					</Typographie>
					<Typographie variant="caption3" theme="gray">
						Abonne-toi à la chaine
					</Typographie>
					<a href="#/" target="_blank">
						<Image
							src="/assets/svg/YTB.svg"
							alt="youtubeLogo"
							width={229}
							height={216}
						/>
					</a>
				</div>
				<div>Liste</div>
			</Container>
			<Container className="pt-9 pb-11 space-y-11">
				<hr className="text-gray-800" />
				<div className="flex justify-between items-center">
					<Typographie variant="caption4" theme="gray">
						{`Copyrigth 2025 | Propulsed by`} {""}
						{
							<a href="https://github.com/Fred120-code">
								Joran Fred
							</a>
						}
						{`- DevFullstack`}
					</Typographie>
					<div></div>
				</div>
			</Container>
		</div>
	);
};

export default footer;
