import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "./ProductSlider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductSlider = () => {
  return (
    <div className="container">
      <div className="my-projects grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-7">
        <h2 className="text-2xl mb-5">Мои проекты</h2>
        <Swiper
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 9,
              spaceBetween: 30,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          <div className="my-projects-wrap">
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-projects-box"></div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="measurements">
        <h2 className="text-2xl mt-9 mb-5">Замеры</h2>
        <Swiper
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 9,
              spaceBetween: 30,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="measurements-box"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="templates">
        <h2 className="text-2xl mt-9 mb-5">Шаблоны</h2>
        <Swiper
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5  ,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 9,
              spaceBetween: 30,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="templates-box"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
