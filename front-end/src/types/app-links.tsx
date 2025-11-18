import { Linktypes } from "@/lib/link-types";
import { IconType } from "react-icons";

export interface PropsAppLinks {
	label: string;
	baseUrl: string;
	type: Linktypes;
	icon?: IconType
}

export interface FooterLinks {
	label: string;
	links: PropsAppLinks[];
}
