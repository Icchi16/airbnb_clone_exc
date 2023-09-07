"use client";

import { Image, image } from "@nextui-org/react";
import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

import { useMemo, useRef, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import clsx from "clsx";
import { CardDataProps } from "@/temps/mainTemp";

interface CoverCarouselProps {
  images: CardDataProps["data"]["images"];
}

const CoverCarousel: React.FC<CoverCarouselProps> = ({ images }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const toggleMouseOver = () => {
    setIsHover((prev) => !prev);
  };

  const imagesCount = useMemo(() => {
    return images.length;
  }, [images]);

  const navigationStyle = {
    wrapper:
      "absolute flex z-50 w-fit inset-y-0 items-center transition-all duration-75 ease-in-out pointer-events-none ",
    button:
      "z-50 text-white text-3xl opacity-80 hover:opacity-100 shadow-lg transition-opacity duration-75 ease-in-out pointer-events-auto",
  };

  return (
    <div onMouseEnter={toggleMouseOver} onMouseLeave={toggleMouseOver}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          enabled: true,
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Pagination, Navigation, EffectFade]}
        className="w-full rounded-2xl relative"
      >
        <div
          ref={prevRef}
          className={clsx(
            navigationStyle.wrapper,
            imagesCount < 2 && "!hidden",
            isHover ? "opacity-100" : "opacity-0",
            "pl-2 left-0"
          )}
        >
          <FaChevronCircleLeft className={clsx(navigationStyle.button, "")} />
        </div>
        <div
          ref={nextRef}
          className={clsx(
            navigationStyle.wrapper,
            imagesCount < 2 && "!hidden",
            isHover ? "opacity-100" : "opacity-0",
            "pr-2 right-0"
          )}
        >
          <FaChevronCircleRight className={clsx(navigationStyle.button, "")} />
        </div>
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              loading="eager"
              alt="id"
              className="!rounded-none aspect-[1/0.9] data-[focus=true]:opacity-100 data-[hover=true]:opacity-100"
              as={NextImage}
              src={image.src}
              width={500}
              height={500 * 0.9}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    // <Carousel
    //   containerProps={{}}
    //   activeSlideIndex={activeSlideIndex}
    //   activeSlideProps={{}}
    //   onRequestChange={setActiveSlideIndex}
    //   forwardBtnProps={{
    //     children: ">",
    //   }}
    //   backwardBtnProps={{
    //     children: "<",
    //   }}
    //   dotsNav={{
    //     show: true,
    //     itemBtnProps: {},
    //     activeItemBtnProps: {},
    //   }}
    //   itemsToShow={1}
    //   speed={400}
    //   centerMode
    //   easing="ease-in-out"
    // >
    //   {Array.from({ length: 3 }).map((item, index) => (
    //     <div className="" key={index}>
    //       <Image
    //         alt="id"
    //         className="aspect-[1/0.9]"
    //         as={NextImage}
    //         src="/images/test.jpeg"
    //         width={500}
    //         height={500 * 0.9}
    //       />
    //     </div>
    //   ))}
    // </Carousel>
  );
};

export default CoverCarousel;
