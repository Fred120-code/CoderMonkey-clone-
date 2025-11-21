import Container from "@/ui/components/container/Container";
import React from "react";
import Typography from "../typography/Typography";
import Button from "../button/Button";
import { LinkType } from "@/lib/link-types";
import Image from "next/image";

const CallToAction = () => {
	return (
		<div className=" relative bg-primary overflow-hidden">
			<Container className="py-20">
				<div className=" relative z-10 max-w-3xl space-y-5">
					<Typography variant="h2" theme="white" components="h2">
						N'attends pas pour developper tes compétences...
					</Typography>
					<div>
						<Button
							baseUrl="/#"
							variants="success"
							linkType={LinkType.EXTERNAL}
						>
							Formation en React.js Gratuite
						</Button>
					</div>
				</div>
				<div>
					<Image
						src="/assets/svg/bombers.svg"
						alt="illustration dune bombe"
						width={1210}
						height={1210}
                        className=" absolute -bottom-[620px] right-0"
					/>
				</div>
			</Container>
		</div>
	);
};

export default CallToAction;
