import logoImg from "../assets/logo.png"
import {Links} from "./links"
import { ChevronRight } from "lucide-react";

const LinkSections = [
	["Product", "Overview", "Pricing", "Customer stories"],
	["Resources", "Blog", "Guides & tutorials", "Help center"],
	["Company", "About us", "Careers", "Media kit"]
];

export type LinkSection = typeof LinkSections[number];

export function Footer() {
	return (
		<footer className='px-8 py-20 bg-primary-DarkBlue h-fit flex flex-col gap-16'>
			<div className="flex flex-col gap-6">
				<img className="object-contain h-9" src={logoImg}></img>
				<p
				className="font-inter text-secondary-white text-lg text-center font-light">
					whitepace was created for the new ways we live and work. We make beautyfully designed around the world
				</p>
			</div>
			{LinkSections.map((section) => (
				<Links linkArray={section}/>
			))}
			<div className="flex flex-col gap-6 px-8">
				<h2 className='font-inter font-bold text-secondary-white text-3xl text-center'>Try It Today</h2>
				<p
				className="font-inter text-secondary-white text-lg text-center font-light">
					Get started for free. Add your whole team as your needs grow.
				</p>
				<button className='bg-primary-LightBlue rounded-lg py-5 px-9 flex gap-2 items-center'>
					<p className='text-secondary-white font-extralight text-lg font-inter'>Start today</p>
					<ChevronRight className='text-secondary-white'/>
				</button>
			</div>
			
		</footer>
	);
}