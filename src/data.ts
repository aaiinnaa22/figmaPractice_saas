import type { ContentSectionData } from './types';
import sponsorsImg from "./assets/sponsors.png"
import workTogetherImg from "./assets/workTogether.png";
import dataImg from "./assets/data.png";
import appImg from "./assets/Apps.png";
import testClientProfile from "./assets/testClientProfile.png";
import appIconsImg from "./assets/appIcons.png";
import type { LinkSection } from './types';

export const ContentSections: ContentSectionData[] = [
	{
		title: "Project Management",
		description: "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
		buttonText: "Get Started"
	},
	{
		title: "Work together",
		description: "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
		buttonText: "Try it now",
		imgSrc: workTogetherImg
	},
	{
		title: "Use as Extension",
		description: "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
		buttonText: "Let’s Go",
		backgroundVariant: "dark"
	},
	{
		title: "Customise it to your needs",
		description: "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
		buttonText: "Let’s Go",
		imgPosition: "top"
	},
	{
		title: "Choose Your Plan",
		description: "Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.",
		horizontalScrollItems: {
			type: "pricePlan",
			items:
			[
				{
					title: "Personal",
					price: "$11.2",
					description: "Keep home and family on track",
					bulletPoints: [
						"Sync unlimited devices",
						"10 GB monthly uploads",
						"200 MB max. note size",
						"Customize Home dashboard and access extra widgets",
						"Connect primary Google Calendar account",
						"Add due dates, reminders, and notifications to your tasks"
					],
					buttonText: "Get Started"
				},
				{
					title: "Personal",
					price: "$11.2",
					description: "Keep home and family on track",
					bulletPoints: [
						"Sync unlimited devices",
						"10 GB monthly uploads",
						"200 MB max. note size",
						"Customize Home dashboard and access extra widgets",
						"Connect primary Google Calendar account",
						"Add due dates, reminders, and notifications to your tasks"
					],
					buttonText: "Get Started"
				},
				{
					title: "Personal",
					price: "$11.2",
					description: "Keep home and family on track",
					bulletPoints: [
						"Sync unlimited devices",
						"10 GB monthly uploads",
						"200 MB max. note size",
						"Customize Home dashboard and access extra widgets",
						"Connect primary Google Calendar account",
						"Add due dates, reminders, and notifications to your tasks"
					],
					buttonText: "Get Started"
				},
			]
		},
		imgPosition: "none"
	},
	{
		title: "Your work, everywhere you are",
		description: "Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!",
		buttonText: "Try Taskey",
		backgroundVariant: "dark",
		imgPosition: "none"
	},
	{
		title: "100% your data",
		description: "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.",
		buttonText: "Read more",
		imgSrc: dataImg,
		imgPosition: "top"
	},
	{
		title: "Our sponsors",
		imgSrc: sponsorsImg
	},
	{
		title: "Work with Your Favorite Apps Using whitepace",
		description: "whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
		buttonText: "Read more",
		imgSrc: appImg,
		imgPosition: "top",
		backgroundVariant: "dark"
	},
	{
		title: "What Our Clients Says",
		horizontalScrollItems: {
			type: "clientQuotes",
			items: [
				{
					quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
					name: "Oberon Shaw",
					company: "MCH",
					profile: testClientProfile,
					role: "Head of Talent Acquisition",
					location: "North America"
				},
				{
					quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
					profile: testClientProfile,
					name: "Oberon Shaw",
					company: "MCH",
					role: "Head of Talent Acquisition",
					location: "North America"
				},
				{
					quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
					profile: testClientProfile,
					name: "Oberon Shaw",
					company: "MCH",
					role: "Head of Talent Acquisition",
					location: "North America"
				},
			]
		},
		imgPosition: "none"
	}
];



export const FooterSectionText = {
	contentSection:
		{
			title: "Try Whitepace today",
			description: "Get started for free. Add your whole team as your needs grow.",
			buttonText: "Try Taskey free",
			description2: "On a big team? Contact sales",
			imgSrc: appIconsImg,
		} as ContentSectionData,
	description: "whitepace was created for the new ways we live and work. We make beautyfully designed around the world",
	links: [
		{
			title: "Product",
			links: ["Overview", "Pricing", "Customer stories"]
		},
		{
			title: "Resources",
			links: ["Blog", "Guides & tutorials", "Help center"]
		},
		{
			title: "Company",
			links: ["About us", "Careers", "Media kit"]
		},
	] as LinkSection[],
	legalLinks: {links: ["Terms & privacy", "Security", "Status"]} as LinkSection,
	title: "Try It Today",
	description2: "Get started for free. Add your whole team as your needs grow.",
	buttonText: "Start today",
	copyright: "©2021 Whitepace LLC."
}

export const HeroSectionText = {
	title: "Get More Done with whitepace",
	description: "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
	buttonText: "Try TasKey Free"
}