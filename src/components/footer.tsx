import logoImg from "../assets/logo.png"
import {Links} from "./links"
import { LanguageSelector } from "./languageSelector";
import { LightBlueButton } from "./lightBlueButton";
import { LinkSections } from "../data";


export function Footer() {
	return (
		<footer className='px-8 pt-20 bg-primary-DarkBlue h-fit flexCol gap-16'>
			<div className="flexCol gap-6">
				<img className="object-contain h-9" src={logoImg}></img>
				<p
				className="p2 text-secondary-white text-center">
					whitepace was created for the new ways we live and work. We make beautyfully designed around the world
				</p>
			</div>
			{LinkSections.map((section) => (
				<Links linkArray={section}/>
			))}
			<div className="flexCol gap-6 px-8">
				<h2 className="h5 text-center text-secondary-white">Try It Today</h2>
				<p
				className="p2 text-secondary-white text-center">
					Get started for free. Add your whole team as your needs grow.
				</p>
				<LightBlueButton buttonText="Start today"/>
			</div>
			<div className="flexCol gap-5 px-8 items-center border-b border-primary-LightBlue pb-5">
				<LanguageSelector/>
				<p className="p3 text-secondary-white">Terms & privacy</p>
				<p className="p3 text-secondary-white">Security</p>
				<p className="p3 text-secondary-white">Status</p>
				<p className="p3 text-secondary-white">©2021 Whitepace LLC.</p>
			</div>
		</footer>
	);
}