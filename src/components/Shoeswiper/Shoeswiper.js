import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Shoeswiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

export default function Showswiper({products}) {

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          {products?.map((slide, i)=>(
            
        <SwiperSlide>
          <div className=" w-[450px] h-[400px]">
            <img
            src={slide?.images[0]}
              // src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct1Maain.png%3Falt%3Dmedia%26token%3D57390b99-b996-41f8-a184-472b5c21bc90&w=640&q=75"
              alt=""
            />
            <div className="bg-blue-200 flex flex-col items-start h-[200px]">
              <p style={{ whiteSpace:'pre',overflow:'hidden',textOverflow: 'ellipsis'}} className="text-lg font-bold">{slide.name}</p>
              <span className="text-sm">
                Cloud White / Chalk White / Zero Metalic
              </span>
              <div className="flex justify-center">
                {/* <span className="text-sm text-red-700 line-through ">{slide.price}$</span> */}
                <span className="text-sm text-green-700 grow">{slide.discountedPrice}$</span>
                {/* <span className="text-sm text-blue-700">5%</span> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
          ))}

      </Swiper>
    </>
  );
}
