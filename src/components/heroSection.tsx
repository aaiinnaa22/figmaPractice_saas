import {ChevronRight} from "lucide-react"

export function HeroSection()
{
	return (
		<section className='px-4 py-20 bg-primary-DarkBlue h-fit flex flex-col gap-26'>
			<div className='w-full flex flex-col justify-center items-center gap-16'>
				<div className='flex flex-col gap-8'>
					<h2 className='font-inter font-bold text-secondary-white text-4xl text-center'>Get More Done with whitespace</h2>
					<p className='font-inter text-secondary-white text-lg text-center font-light'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
				</div>
				<button className='bg-primary-LightBlue rounded-lg py-5 px-9 flex gap-2 items-center'>
					<p className='text-secondary-white font-extralight text-xl'>Try TasKey Free</p>
					<ChevronRight className='text-secondary-white'/>
				</button>
			</div>
			<div className='w-full h-48 bg-blue-200'></div>
		</section>
	);
}