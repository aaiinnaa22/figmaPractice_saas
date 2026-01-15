import { LightBlueButton } from "./lightBlueButton";
import { ImagePlaceholder } from "./imagePlaceholder";

export function HeroSection()
{
	return (
		<section className='px-4 py-20 bg-primary-DarkBlue h-fit flexCol gap-26'>
			<div className='w-full flexCol justify-center items-center gap-16'>
				<div className='flexCol gap-8'>
					<h2 className="h4 text-secondary-white text-center">Get More Done with whitepace</h2>
					<p className="p2 text-secondary-white text-center">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
				</div>
			<LightBlueButton buttonText="Try TasKey Free"/>
			</div>
			<ImagePlaceholder/>
		</section>
	);
}