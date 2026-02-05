import type { ClientQuoteItem } from "../types";
import { SwiperSlide } from "swiper/react";
import quoteMarkImg from "../assets/quote.png"
import { Swiper} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";


type ClientQuotesProps =
{
	clientQuoteItems: ClientQuoteItem[];
}


export function ClientQuotes({clientQuoteItems}: ClientQuotesProps) {
	return (
		<Swiper
			className={"w-full clientQuotes"}
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
					slidesPerView: 1.9,
					centeredSlides: true,
					spaceBetween: 30,
				},
			}}>
			{clientQuoteItems.map((quote, index) => (
				<SwiperSlide key={index} className="group">
					<div className="clientQuotesCard">
							<img
							src={quoteMarkImg}
							className="md:hidden w-14"></img>
							<p className="p3 md:p2"><span className="hidden md:inline-block">"</span>{quote.quote}<span className="hidden md:inline-block">"</span></p>
							<div className="md:hidden border border-gray-400"></div>
							<img
							src={quote.profile}
							className="md:row-start-1 object-cover aspect-square w-16 md:w-18 rounded-full">
							</img>
							<div className="flex flex-col gap-3 md:gap-0">
								<h3 className="font-bold p2">{quote.name}<span className="md:hidden">, {quote.company}</span></h3>
								<div>
									<p className="p2">{quote.role}, <span className="hidden md:inline-block">{quote.company}</span></p>
									<p className="md:hidden p2">{quote.location}</p>
								</div>
							</div>
						</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};