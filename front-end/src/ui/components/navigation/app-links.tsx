import { PropsAppLinks } from "@/types/app-links";
import { RiGithubFill, RiLinkedinFill, RiSlackFill } from "react-icons/ri";
const footerApplicationLinks: PropsAppLinks[] = [
	{
		label: "Acceuil",
		baseUrl: "/",
		type: "internal",
	},
	{
		label: "Projets",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Codeurs Monkey",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Formation",
		baseUrl: "/#",
		type: "external",
	},
];
const footerUsersLinks: PropsAppLinks[] = [
	{
		label: "Mon espace",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Connexion",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Inscription",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Mot de passe oublier",
		baseUrl: "/#",
		type: "internal",
	},
];
const footerInformationsLinks: PropsAppLinks[] = [
	{
		label: "CGU",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Confodentialité",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "A propos",
		baseUrl: "/#",
		type: "internal",
	},
	{
		label: "Contact",
		baseUrl: "/#",
		type: "internal",
	},
];
export const footerSocialNetworkLinks: PropsAppLinks[] = [
	{
		label: "GitHub",
		baseUrl: "https://github.com/Fred120-code",
		type: "external",
		icon: RiGithubFill,
	},
	{
		label: "Linkdin",
		baseUrl: "/#",
		type: "external",
		icon: RiLinkedinFill,
	},
	{
		label: "Slack",
		baseUrl: "/#",
		type: "external",
		icon: RiSlackFill,
	},
];

export const footerLink = [
	{
		label: "App",
		links: footerApplicationLinks,
	},
	{
		label: "Utilisateurs",
		links: footerUsersLinks,
	},
	{
		label: "Informations",
		links: footerInformationsLinks,
	},
	{
		label: "Réseaux",
		links: footerSocialNetworkLinks,
	},
];
