import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>

            {/* https://i.ibb.co/Tqpz5Jfx/pexels-cottonbro-6594301.jpg
https://i.ibb.co/bjz7bfzm/pexels-shvets-production-9049686.jpg
https://i.ibb.co/fzm3WbH4/pexels-ketut-subiyanto-4907608.jpg
https://i.ibb.co/kVj1Qhsm/pexels-cottonbro-4781415.jpg
https://i.ibb.co/GvV2pzTd/pexels-cottonbro-5158980.jpg

https://i.ibb.co/gMmNZZKK/pexels-cottonbro-4783544.jpg
https://i.ibb.co/7d908D10/pexels-cottonbro-4778662.jpg
https://i.ibb.co/DH8QB3xm/pexels-cottonbro-4778621.jpg
https://i.ibb.co/JjdRHYdh/pexels-rdne-5617834.jpg */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper rounded-xl"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/Tqpz5Jfx/pexels-cottonbro-6594301.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/bjz7bfzm/pexels-shvets-production-9049686.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/fzm3WbH4/pexels-ketut-subiyanto-4907608.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/kVj1Qhsm/pexels-cottonbro-4781415.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/GvV2pzTd/pexels-cottonbro-5158980.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/gMmNZZKK/pexels-cottonbro-4783544.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/7d908D10/pexels-cottonbro-4778662.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/DH8QB3xm/pexels-cottonbro-4778621.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JjdRHYdh/pexels-rdne-5617834.jpg" alt="" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
