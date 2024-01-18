import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Shoeswiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

export default function Showswiper() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct1Maain.png%3Falt%3Dmedia%26token%3D57390b99-b996-41f8-a184-472b5c21bc90&w=640&q=75" alt="" />
          {/* <div className='bg-black w-[480px] h-[150px] absolute mt-[300px]' ></div> */}
          <div className='bg-white w-[480px] h-[100px] absolute mt-[300px]'>
                <p className="font-bold text-xl" >CLOUDFOAM PURE SHOES</p>
                <span className="text-lg">Cloud White / Chalk White / Zero Metalic</span>
                <div className="flex gap-5 justyfy-between"> 
                    <span className="text-lg text-red-700 line-through ">75$</span>
                    <span  className="text-lg text-green-700 grow">71.25$</span>
                    <span  className="text-lg text-blue-700">5%</span>
                </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct3Main.avif%3Falt%3Dmedia%26token%3Dcfb8a965-e230-4bf1-8756-265ed419502f&w=640&q=75" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct4main.avif%3Falt%3Dmedia%26token%3De7267dcd-3119-4d5b-b872-4cf9e4eefd68&w=640&q=75" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct5main.avif%3Falt%3Dmedia%26token%3D76c8eb87-50d3-4493-9573-731d5fce55a2&w=640&q=75" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=640&q=75" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct7main.avif%3Falt%3Dmedia%26token%3D75513f13-1d32-450f-8333-fb3b66100061&w=640&q=75" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct8main.avif%3Falt%3Dmedia%26token%3Dc78d67b3-02ed-4e49-924a-083889aab78b&w=640&q=75" alt="" />

        </SwiperSlide>
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </>
  );
      }