import type { PricePlanItem } from "../types";
import bulletPointImg from "../assets/bulletPoint.png"
import { SwiperSlide } from "swiper/react";
import { Carousel } from "./carousel";

type PricePlanProps =
{
	pricePlanItems: PricePlanItem[];
}

export function PricePlan({pricePlanItems}: PricePlanProps) {
	return (
		<Carousel className="w-full h-175">
			{pricePlanItems.map((plan, index) => (
				<SwiperSlide key={index}>
					<div className="bg-primary-DarkBlue rounded-lg p-5 font-inter text-secondary-white flex flex-col gap-5">
						<h3 className="text-2xl font-medium tracking-wide">{plan.title}</h3>
						<h2 className="text-4xl font-bold tracking-wide">{plan.price}</h2>
						<p className="font-light">{plan.description}</p>
						<ul className="flex flex-col gap-7 leading-tight">
							{plan.bulletPoints.map((point, index) => (
								<li
									key={index}
									className="flex items-center gap-4">
									<img className="w-4 h-4" src={bulletPointImg}></img>
									<span className="font-light text-md">{point}</span>
								</li>
							))}
						</ul>
						<button className='bg-primary-LightBlue rounded-lg py-4 px-10 w-fit'>
							<p className='text-secondary-white font-light text-lg'>{plan.buttonText}</p>
						</button>
					</div>
				</SwiperSlide>
			))}
		</Carousel>
	);
};