import type { ContentSectionData } from "../types";
import { Title } from "./title";
import { PricePlan } from "./pricePlan";
import { ClientQuotes } from "./clientQuotes";
import { LightBlueButton } from "./lightBlueButton";
import { ImagePlaceholder } from "./imagePlaceholder";

type ContentSectionProps = ContentSectionData

const backgroundClassMap = {
	dark: "bg-primary-DarkBlue",
	light: "bg-secondary-white"
}

const textClassMap = {
	dark: "text-secondary-white",
	light: "text-secondary-black"
}

export function ContentSection({title, description, description2, buttonText, imgSrc, imgPosition = "bottom", backgroundVariant = "light", horizontalScrollItems}: ContentSectionProps)
{
	const image = imgSrc
	? <img src={imgSrc}></img>
	: <ImagePlaceholder/>

	const backgroundClass = backgroundClassMap[backgroundVariant];
	const textClass = textClassMap[backgroundVariant];


	return (
		<section className={"min-h-194 px-4 pb-20 pt-22 flexCol gap-26 " + backgroundClass}>
			<div className='w-full flexCol justify-center items-center gap-16'>
				{imgPosition === "top" && image}
				<div className='flexCol gap-8'>
					<Title textClass={textClass} text={title}/>
					{description &&
						<p className={"p2 text-center " + textClass}>{description}</p>}
				</div>
				{horizontalScrollItems?.type === "pricePlan" &&
					<PricePlan pricePlanItems={horizontalScrollItems.items}/>}
				{horizontalScrollItems?.type === "clientQuotes" &&
					<ClientQuotes clientQuoteItems={horizontalScrollItems.items}/>}
				{buttonText &&	<LightBlueButton buttonText={buttonText}/>}
				{description2 &&
						<p className={"p2 text-secondary-black text-center " + textClass}>{description2}</p>}
				{imgPosition === "bottom" && image}
			</div>
		</section>
	);
}