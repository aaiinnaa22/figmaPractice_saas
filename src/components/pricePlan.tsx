import type { PricePlanItem } from "../types";
import bulletPointImg from "../assets/bulletPoint.png"
import { SwiperSlide } from "swiper/react";
import { Carousel } from "./carousel";
import { Button } from "./button";

type PricePlanProps =
{
	pricePlanItems: PricePlanItem[];
}

export function PricePlan({pricePlanItems}: PricePlanProps) {
	return (
		<Carousel className="pricePlan">
			{pricePlanItems.map((plan, index) => (
				<SwiperSlide key={index} className="group">
					<div className="pricePlanCard">
						<h3 className="p1 font-semibold">{plan.title}</h3>
						<p className="h4 pricePlanPrice">{plan.price}</p>
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
							<Button buttonText={plan.buttonText} hasArrow={false} colorClassName="pricePlanButton"/>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Carousel>
	);
};