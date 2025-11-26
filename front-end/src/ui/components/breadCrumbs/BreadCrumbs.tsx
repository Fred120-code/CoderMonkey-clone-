import Typography from "@/ui/design-system/typography/Typography";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import Container from "../container/Container";
import Link from "next/link";

const BreadCrumbs = () => {
	const router = useRouter();
	const asPath = router.asPath;
	const segment = asPath.split("/");
	const lastSegment = segment[segment.length - 1];
	segment[0] = "accueil";
	console.log("segment:", segment);

	const veiw = segment.map((path, index) => (
		<div key={uuidv4()} className="flex items-center">
			<Link
				href={
					index > 0
						? `/${segment.slice(1, index + 1).join("/")}`
						: "/"
				}
			>
				<Typography
					variant="caption3"
					components="span"
					className={clsx(
						path != lastSegment ? "text-gray-600" : "text-gray",
						"capitalize hover:text-gray animate"
					)}
				>
					{path != "accueil" ? (
						path.replace(/-/g, " ")
					) : (
						<RiHome3Line className="inline -mt-1" />
					)}
					
				</Typography>
				{path != lastSegment ||
					(path != "accueil" && (
						<Typography
							variant="caption2"
							components="span"
							className="ml-2 text-gray-600"
						>
							/
						</Typography>
					))}
			</Link>
		</div>
	));

	return (
		<Container className="flex items-center gap-2 py-7">{veiw}</Container>
	);
};

export default BreadCrumbs;
