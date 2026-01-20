import './index.css'
import {Menu} from "lucide-react"
import { HeroSection } from './components/heroSection';
import { ContentSection } from './components/contentSection';
import { FooterSection } from './components/footerSection';
import socialsImg from "./assets/socials.png"
import iconImg from "./assets/logo.png";
import { ContentSections } from './data';

function App() {
	return (
		<div className="w-screen flex flex-col bg-secondary-white">
			<header className="z-20 sticky h-fit w-full top-0 left-0 p-3 bg-primary-DarkBlue flex items-center justify-between">
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
			<FooterSection/>
			<div className='bg-primary-DarkBlue flex justify-center py-4'>
				<img src={socialsImg} className="py-4"></img>
			</div>
		</div>
	);
}

export default App
