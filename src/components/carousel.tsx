import { Swiper} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";


type CarouselProps =
{
	children: React.ReactNode;
}

export function Carousel({ children}: CarouselProps) {
	return (
		<Swiper
			className="w-full"
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
			}}
		>
		{children}
		</Swiper>
	);
}