import type { ClientQuoteItem } from "../types";
import { SwiperSlide } from "swiper/react";
import quoteMarkImg from "../assets/quote.png"
import { Carousel } from "./carousel";


type ClientQuotesProps =
{
	clientQuoteItems: ClientQuoteItem[];
}

export function ClientQuotes({clientQuoteItems}: ClientQuotesProps) {
	return (
		<Carousel className="w-full h-136">
			{clientQuoteItems.map((quote, index) => (
				<SwiperSlide key={index}>
					<div className="shadow-lg rounded-xl flexCol p-6">
						<div className="pb-10 mb-10 border-b flexCol gap-6">
							<img
							src={quoteMarkImg}
							className="w-14"></img>
							<p className="p3">{quote.quote}</p>
						</div>
						<div className="flexCol gap-6">
							<img
							src={quote.profile}
							className="object-cover aspect-square w-16 rounded-full">
							</img>
							<h3 className="font-bold p2">{quote.name}</h3>
							<div className="font-inter font-light">
								<h2 className="p2">{quote.role},</h2>
								<h2 className="p2">{quote.location}</h2>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Carousel>
	);
};