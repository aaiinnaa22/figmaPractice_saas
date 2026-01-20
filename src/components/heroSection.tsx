import { Button } from "./button";
import { ImagePlaceholder } from "./imagePlaceholder";
import { HeroSectionText } from "../data";

export function HeroSection()
{
	return (
		<section className="px-4 py-20 bg-primary-DarkBlue h-fit flexCol gap-26 items-center justify-center
		md:py-28">
			<div className='w-full flexCol justify-center items-center gap-16'>
				<div className='flexCol gap-8'>
					<h1 className="h4 md:h3 text-secondary-white text-center">{HeroSectionText.title}</h1>
					<p className="p2 text-secondary-white text-center">{HeroSectionText.description}</p>
				</div>
			<Button buttonText={HeroSectionText.buttonText}/>
			</div>
			<ImagePlaceholder/>
		</section>
	);
}