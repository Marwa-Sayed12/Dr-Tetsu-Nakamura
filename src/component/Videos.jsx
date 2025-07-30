import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useLanguage } from '../context/LanguageContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../CSS/videos.css';

const Videos = () => {
  const { texts } = useLanguage(); 



  return (
    <section id="videos" className="videos-section">
      <h2 className="section-title">{texts?.videos?.title}</h2> {/* 👈 Translated title */}

      <Swiper
        dir={document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr'}

      style={{ maxWidth: '100%' }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="video-card">
            <iframe
             frameBorder="0"
              src="https://www.youtube.com/embed/BlForSVfBgc?si=07ecoiFFqXKJL5Zb"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-card">
            <iframe
             
              src="https://www.youtube.com/embed/_ftfdZhUcjI?si=uHHwCpLF7JkB1hLm"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="video-card">
            <iframe  src="https://www.youtube.com/embed/cRc7CeYpPCM?si=U-a4qcAO_3ohNynp"
              frameborder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                 allowfullscreen
                 ></iframe>
            </div>
          </SwiperSlide>


        <SwiperSlide>
          <div className="video-card">
          <iframe  src="https://www.youtube.com/embed/7o7yOIs5-qM?si=uQh4wZiccKhilIKR"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="video-card">
        <iframe  src="https://www.youtube.com/embed/0UiX83lS5XQ?si=lhZTI9xfyA4mmW-6"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>
       </SwiperSlide>
       
       <SwiperSlide>
        <div className="video-card">
        <iframe  src="https://www.youtube.com/embed/6LXPaSAHLQo?si=t6Cxvj1ZzTDXtmJM"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
       </SwiperSlide>
       
        <SwiperSlide>
          <div className="video-card">
          <iframe  src="https://www.youtube.com/embed/98NkFZSAkWg?si=pDXpXvZHT7Rjcwl2"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-card">
          <iframe  src="https://www.youtube.com/embed/dWvwrJJ9nJo?si=9ore8FBpN0czjMgU"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-card">
          <iframe  src="https://www.youtube.com/embed/MbvjYZteKjc?si=4AI1GEaa5_hWYiPs"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="video-card">
                        <iframe  src="https://www.youtube.com/embed/1wxqJpcDU3k?si=JnHDtDJz0XJ4d01B"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </SwiperSlide>

        

      </Swiper>
    </section>
  );
};

export default Videos;
