import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const MarqueeSwiper = () => {
  const images = [
    "https://carpent-react.vercel.app/assets/2-0qttj0fo.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
     "https://carpent-react.vercel.app/assets/2-0qttj0fo.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
    "https://carpent-react.vercel.app/assets/3-Bhm8CqD1.jpg",
  ];

  return (
    <section className="bg-gray-50 py-10 my-[3%] px-[10%]">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="flex items-center"
        style={{ transitionTimingFunction: 'linear' }}  // Inline fix here
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} style={{ width: '150px' }}>
            <div className="flex items-center gap-3 px-4 justify-center ">
              <img
                src={item}
                alt={`icon-${index}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MarqueeSwiper;
