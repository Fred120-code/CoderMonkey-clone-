import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import React from "react";
import { RiPlayCircleFill, RiPlayCircleLine, RiPlayLine } from "react-icons/ri";

const CurrentCourse = () => {
	return (
		<div className="bg-gray-300 ">
			<Container className="py-24 text-center">
				<Typography variant="h2" components="h2" className="mb-2.5">
					Formations React.js gratuite
				</Typography>
				<Typography variant="lead" components="h3" className="mb-5">
					Apprends à développer avec react
				</Typography>{" "}
				<Typography
					variant="caption3"
					theme="gray"
					components="p"
					className="mb-16"
				>
					Suis cette formation gratuite sur Youtube pour apprendre à
					coder avec react.js
				</Typography>
				<a href="/#" target="_blank">
					<div className="relative bg-gray-400 rounded h-[626px]">
						<div className="flex flex-col items-center justify-center gap-2 relative bg-gray z-10 h-full rounded hover:opacity-95 opacity-0 animate text-white">
							<RiPlayCircleLine size={49} />
							<Typography
								variant="caption2"
								theme="white"
								className=" uppercase"
								weight="medium"
							>
								Lire la formation
							</Typography>
						</div>
						<Image
							fill
							src="/assets/images/coders-monkeys-course-cta.jpg"
							alt="imageDesign"
							className="object-cover object-center rounded"
						/>
					</div>
				</a>
			</Container>
		</div>
	);
};

export default CurrentCourse;
