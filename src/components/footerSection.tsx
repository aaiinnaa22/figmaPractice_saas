import logoImg from "../assets/logo.png"
import { LanguageSelector } from "./languageSelector";
import { Button } from "./button";
import { FooterSectionText } from "../data";

export function FooterSection() {
	return (
		<footer className='px-8 md:px-6 pt-20 md:pt-28 bg-primary-DarkBlue flex flex-col gap-26 md:gap-20 md:items-start'>
			<div className="flex flex-col items-center gap-8 md:items-start">
				<h2 className="h4 text-secondary-white text-center md:text-left">{FooterSectionText.contentSection.title}</h2>
				<p className="p2 md:p1 text-secondary-white text-center font-light">{FooterSectionText.contentSection.description}</p>
				{FooterSectionText.contentSection.buttonText &&
				<Button buttonText={FooterSectionText.contentSection.buttonText}/>}
				<p className="p2 md:p1 text-secondary-white text-center font-light">{FooterSectionText.contentSection.description2}</p>
				<img className="object-contain md:h-15" src={FooterSectionText.contentSection.imgSrc}/>
			</div>
			<div className="flex flex-col gap-24 md:items-start">
				<div className="flex flex-col gap-6 md:items-start">
					<img className="object-contain h-9 md:h-15" src={logoImg}></img>
					<p
					className="p2 text-secondary-white text-center md:text-left">
						{FooterSectionText.description}
					</p>
				</div>
				{FooterSectionText.links.map((linkSection) => (
					<div key={linkSection.title} className="flex flex-col items-center md:items-start gap-4 font-inter text-secondary-white">
						<h3 className="p2 font-bold">{linkSection.title}</h3>
						<nav className="flex flex-col items-center md:items-start gap-4">
							{linkSection.links.map((link) => (
								<a key={link} className="p2">
									{link}
								</a>
							))}
						</nav>
					</div>
					))}
				<div className="flex flex-col gap-6 items-center md:items-start">
					<h2 className="h5 text-center text-secondary-white">{FooterSectionText.title}</h2>
					<p
					className="p2 text-secondary-white text-center">
						{FooterSectionText.description2}
					</p>
					<Button buttonText={FooterSectionText.buttonText}/>
				</div>
				<div className="flex flex-col gap-5 px-8 items-center pb-5 md:flex-row justify-center md:justify-between">
					<LanguageSelector/>
					<nav className="flex flex-col gap-5 items-center md:flex-row md:gap-12">
						{FooterSectionText.legalLinks.links.map((link) => (
							<a key={link} className="p3 text-secondary-white">{link}</a>
						))}
					</nav>
					<p className="p3 text-secondary-white">{FooterSectionText.copyright}</p>
				</div>
			</div>
		</footer>
	);
}