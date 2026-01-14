import { LightBlueButton } from "./lightBlueButton";

export function HeroSection()
{
	return (
		<section className='px-4 py-20 bg-primary-DarkBlue h-fit flex flex-col gap-26'>
			<div className='w-full flex flex-col justify-center items-center gap-16'>
				<div className='flex flex-col gap-8'>
					<h2 className="h4 text-secondary-white text-center">Get More Done with whitepace</h2>
					<p className="p2 text-secondary-white">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
				</div>
			<LightBlueButton buttonText="Try TasKey Free"/>
			</div>
			<div className='w-full h-48 bg-blue-200'></div>
		</section>
	);
}