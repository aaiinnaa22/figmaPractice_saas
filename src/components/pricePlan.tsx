import type { PricePlanItem } from "../types";
import bulletPointImg from "../assets/bulletPoint.png"
import { SwiperSlide } from "swiper/react";
import { Button } from "./button";
import { Swiper} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";


type PricePlanProps =
{
	pricePlanItems: PricePlanItem[];
}

export function PricePlan({pricePlanItems}: PricePlanProps) {
	return (
		<Swiper
			className={"w-full pricePlan"}
			modules={[Pagination, Autoplay]}
			spaceBetween={20}
			autoplay={{ delay: 3000, disableOnInteraction: true }}
			speed={900}
			pagination={{
				clickable: true,
				enabled: true,
			}}
			breakpoints={{
				768: {
					slidesPerView: 1.5,
					centeredSlides: true,
					spaceBetween: 30,
					pagination: { enabled: false },
				},
			}}>
			{pricePlanItems.map((plan, index) => (
				<SwiperSlide key={index} className="group">
					<div className="pricePlanCard">
						<h3 className="p1 font-semibold">{plan.title}</h3>
						<p className="h4 pricePlanPrice">{plan.price}</p>
						<p className="p3">{plan.description}</p>
						<ul className="flex flex-col gap-7">
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
		</Swiper>
	);
};