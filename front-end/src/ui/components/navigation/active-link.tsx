import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface PropsActiveLink {
	href: string;
	children: React.ReactNode;
}

const activeLink = ({ href, children }: PropsActiveLink) => {
	const router = useRouter();
	const isActive: boolean = useMemo(() => {
		return router.pathname === href;
	}, [router.pathname, href]);

	return (
		<Link href={href} className={clsx(isActive && "text-primary")}>
			{children}
		</Link>
	);
};

export default activeLink;
