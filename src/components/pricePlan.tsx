import type { PricePlanItem } from "../types";
import bulletPointImg from "../assets/bulletPoint.png"
import { SwiperSlide } from "swiper/react";
import { Carousel } from "./carousel";
import { LightBlueButton } from "./lightBlueButton";

type PricePlanProps =
{
	pricePlanItems: PricePlanItem[];
}

export function PricePlan({pricePlanItems}: PricePlanProps) {
	return (
		<Carousel className="w-full h-175">
			{pricePlanItems.map((plan, index) => (
				<SwiperSlide key={index}>
					<div className="bg-primary-DarkBlue rounded-lg p-5 font-inter text-secondary-white flexCol gap-5">
						<h3 className="p1">{plan.title}</h3>
						<h2 className="h4">{plan.price}</h2>
						<p className="p3">{plan.description}</p>
						<ul className="flexCol gap-7">
							{plan.bulletPoints.map((point, index) => (
								<li
									key={index}
									className="flex items-center gap-4">
									<img className="w-4 h-4" src={bulletPointImg}></img>
									<span className="p3">{point}</span>
								</li>
							))}
						</ul>
						<div>
							<LightBlueButton buttonText={plan.buttonText} hasArrow={false}/>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Carousel>
	);
};