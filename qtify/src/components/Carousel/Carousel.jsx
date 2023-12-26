import React ,{useEffect} from 'react';
import styles from "./Carousel.module.css";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
// Import Swiper styles
import 'swiper/css';

const Controls = ({data}) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;

}

function Carousel({data, renderComponent}) {
  return (
    // import Swiper core and required modules
    <div className={styles.wrapper}>
      <Swiper
        // install Swiper modules
        style={{padding: "0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data}/>
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {data.map((ele) => {
          return (
          <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;