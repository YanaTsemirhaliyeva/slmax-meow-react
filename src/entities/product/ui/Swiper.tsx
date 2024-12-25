'use client'
import ImageWithFallback from "./ImageWithFallback";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/styles.scss';
import { Pagination } from 'swiper/modules';
import { cleanUrl } from "@/shared/helpers/cleanUrl";


export const SwiperComponent = ({ images, title }: { images: string[], title: string }) => {

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      loop={true}
    >
      {images && images.map((img) => {
        const cleanedUrl = cleanUrl(img);
        return (
          <SwiperSlide key={img}>
            <ImageWithFallback src={cleanedUrl} alt={title} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
