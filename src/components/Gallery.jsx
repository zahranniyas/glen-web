import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { gallery } from "../assets";

const Gallery = () => {
  return (
    <section id="gallery" className="container">
      <h1 className="heading font-josefin uppercase font-bold text-color-3 text-4xl lg:text-5xl">
        Gallery
      </h1>
      <p className="text-center lg:text-lg text-xs">
        Check out our image gallery for an in-depth view of the place <br />{" "}
        before you place the booking{" "}
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={gallery.img1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img3} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img4} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img5} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img6} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img7} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img8} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img9} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery.img10} alt="img" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Gallery;
