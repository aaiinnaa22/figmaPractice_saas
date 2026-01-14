import {ChevronRight} from "lucide-react"
import type { ContentSectionData } from "../types";
import { Title } from "./title";
import { PricePlan } from "./pricePlan";
import { ClientQuotes } from "./clientQuotes";

type ContentSectionProps = ContentSectionData

const backgroundClassMap = {
	dark: "bg-primary-DarkBlue",
	light: "bg-secondary-white"
}

const textClassMap = {
	dark: "text-secondary-white",
	light: "text-secondary-black"
}

export function ContentSection({title, description,description2, buttonText, imgSrc, imgPosition = "bottom", backgroundVariant = "light", horizontalScrollItems}: ContentSectionProps)
{
	const image = imgSrc
	? <img src={imgSrc}></img>
	: <div className='w-full h-48 bg-blue-200'></div>

	const backgroundClass = backgroundClassMap[backgroundVariant];
	const textClass = textClassMap[backgroundVariant];


	return (
		<section className={"px-4 py-18 h-fit flex flex-col gap-26 " + backgroundClass}>
			<div className='w-full flex flex-col justify-center items-center gap-16'>
				{imgPosition === "top" && image}
				<div className='flex flex-col gap-8'>
					<Title textClass={textClass} text={title}/>
					{description &&
						<p className={"font-inter text-secondary-black text-lg text-center font-light " + textClass}>{description}</p>}
				</div>
				{horizontalScrollItems?.type === "pricePlan" &&
					<PricePlan pricePlanItems={horizontalScrollItems.items}/>}
				{horizontalScrollItems?.type === "clientQuotes" &&
					<ClientQuotes clientQuoteItems={horizontalScrollItems.items}/>}
				{buttonText &&
					<button className='bg-primary-LightBlue rounded-lg py-5 px-9 flex gap-2 items-center'>
						<p className='text-secondary-white font-extralight text-lg font-inter'>{buttonText}</p>
						<ChevronRight className='text-secondary-white'/>
					</button>}
				{description &&
						<p className={"font-inter text-secondary-black text-lg text-center font-light " + textClass}>{description2}</p>}
				{imgPosition === "bottom" && image}
			</div>
		</section>
	);
}