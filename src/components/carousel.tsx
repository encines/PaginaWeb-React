import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <section className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 py-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="h-full"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide key={i}>
            <img
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              src={`/wallpaper.png`}
              alt={`Slide ${i}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
