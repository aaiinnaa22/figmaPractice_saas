import logoImg from "../assets/logo.png"
import { LanguageSelector } from "./languageSelector";
import { LightBlueButton } from "./lightBlueButton";
import { FooterSectionText } from "../data";

export function FooterSection() {
	return (
		<footer className='px-8 pt-20 bg-primary-DarkBlue flexCol gap-16'>
			<div className="flexCol gap-6">
				<img className="object-contain h-9" src={logoImg}></img>
				<p
				className="p2 text-secondary-white text-center">
					{FooterSectionText.description}
				</p>
			</div>
			{FooterSectionText.links.map((linkSection) => (
				<div className="flexCol items-center gap-4 font-inter text-secondary-white">
					<h3 className="p2 font-bold">{linkSection.title}</h3>
					<nav className="flexCol items-center gap-4">
						{linkSection.links.map((link) => (
							<a key={link} className="p2">
								{link}
							</a>
						))}
					</nav>
				</div>
				))}
			<div className="flexCol gap-6 px-8">
				<h2 className="h5 text-center text-secondary-white">{FooterSectionText.title}</h2>
				<p
				className="p2 text-secondary-white text-center">
					{FooterSectionText.description2}
				</p>
				<LightBlueButton buttonText={FooterSectionText.buttonText}/>
			</div>
			<div className="flexCol gap-5 px-8 items-center border-b border-primary-LightBlue pb-5">
				<LanguageSelector/>
				<nav className="flexCol gap-5 items-center">
					{FooterSectionText.legalLinks.links.map((link) => (
						<a className="p3 text-secondary-white">{link}</a>
					))}
				</nav>
				<p className="p3 text-secondary-white">{FooterSectionText.copyright}</p>
			</div>
		</footer>
	);
}