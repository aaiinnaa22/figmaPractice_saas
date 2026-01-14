import './index.css'
import {Menu} from "lucide-react"
import { HeroSection } from './components/heroSection';
import { ContentSection } from './components/contentSection';
import type { ContentSectionData } from './types';
import workTogetherImg from "./assets/workTogether.png";
import dataImg from "./assets/data.png";
import appImg from "./assets/Apps.png";
import iconImg from "./assets/logo.png";
import testClientProfile from "./assets/testClientProfile.png";
import appIconsImg from "./assets/appIcons.png";
import { Footer } from './components/footer';
import socialsImg from "./assets/socials.png"
import sponsorsImg from "./assets/sponsors.png"

function App() {
	const ContentSections: ContentSectionData[] = [
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
						title: "Free",
						price: "$0",
						description: "Free version",
						bulletPoints: [
							"2 GB monthly uploads",
							"100 MB max. note size",
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
						title: "Business",
						price: "$32.9",
						description: "Keep your business on track",
						bulletPoints: [
							"Sync unlimited devices",
							"20 GB monthly uploads",
							"300 MB max. note size",
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
						name: "Oberon Shaw, MCH",
						profile: testClientProfile,
						role: "Head of Talent Acquisition",
						location: "North America"
					},
					{
						quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
						profile: testClientProfile,
						name: "Oberon Shaw, MCH",
						role: "Head of Talent Acquisition",
						location: "North America"
					},
					{
						quote: "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
						profile: testClientProfile,
						name: "Oberon Shaw, MCH",
						role: "Head of Talent Acquisition",
						location: "North America"
					},
				]
			},
			imgPosition: "none"
		},
		{
			title: "Try Whitepace today",
			description: "Get started for free. Add your whole team as your needs grow.",
			buttonText: "Try Taskey free",
			description2: "On a big team? Contact sales",
			imgSrc: appIconsImg,
			backgroundVariant: "dark"
		}
	];
	return (
		<div className="w-screen h-screen grid grid-cols-1 bg-secondary-white">
			<header className="sticky h-fit w-full top-0 left-0 p-3 bg-primary-DarkBlue flex items-center justify-between">
				<img src={iconImg}></img>
				<Menu className='h-10 w-10 text-secondary-white'/>
			</header>
			<HeroSection/>
			{ContentSections.map((section) => (
				<ContentSection
					key={section.title}
					title={section.title}
					description={section.description}
					description2={section.description2}
					buttonText={section.buttonText}
					imgSrc={section.imgSrc}
					imgPosition={section.imgPosition}
					backgroundVariant={section.backgroundVariant}
					horizontalScrollItems={section.horizontalScrollItems}
				/>
			))}
			<Footer/>
			<div className='bg-primary-DarkBlue flex justify-center py-4'>
				<img src={socialsImg} className="py-4"></img>
			</div>
		</div>
	);
}

export default App
