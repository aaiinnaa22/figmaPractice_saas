import { Swiper} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";


type CarouselProps =
{
	children: React.ReactNode;
	className?: string;
}

export function Carousel({children, className}: CarouselProps) {
	return (
		<Swiper
			className={className}
			modules={[Pagination, Autoplay]}
			pagination={{ clickable: true }}
			spaceBetween={20}
			autoplay={{ delay: 3000, disableOnInteraction: true }}
			slidesPerView={1}>
				{children}
		</Swiper>
	);
};