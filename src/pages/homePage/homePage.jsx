import React, { useState } from "react";
import style from "./homePage.module.scss";
import json from "../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  const convertSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
  };
  const changeId = (evt) => {
    sessionStorage.setItem("Id", evt);
    window.location.reload();
  };

  let TendingNow = [...json.TendingNow];
  const sortedSlides = [...TendingNow].sort((a, b) => a.Date - b.Date);

  return (
    <>
      <div className={style.HomePage}>
        <div className={style.HeadBox}>
          {json.TendingNow.map((item) => {
            if (item.Id == sessionStorage.getItem("Id")) {
              return (
                <div key={item.Id}>
                  <video
                    id="background-video"
                    loop
                    autoPlay
                    muted
                    className={style.backgroundVideo}
                  >
                    <source src={`${item.VideoUrl}`} type="video/mp4" />
                  </video>
                  <h3> {item.Category}</h3>
                  <img
                    src={require(`../../assets/${item.TitleImage}`)}
                    alt=""
                  />
                  <div className="d-flex">
                    <p>{item.ReleaseYear}</p>
                    <p>{item.MpaRating}</p>
                    <p>{convertSeconds(item.Duration)}</p>
                  </div>
                  <h4>{item.Description}</h4>

                  <div className="mt-4">
                    <button className={style.PlayVideo}>
                      <FontAwesomeIcon icon={faPlay} className="me-2" />
                      Play
                    </button>
                    <button className={style.PlayInfo}>More Info</button>
                  </div>
                  <h5>Trending Now</h5>
                </div>
              );
            }
          })}
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
          position={"center"}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={8}
          spaceBetween={50}
          mousewheel={true}
          initialSlide={sessionStorage.getItem("Id") - 1}
          breakpoints={{
            1200: {
              spaceBetween: 0,
              slidesPerView: 8,
            },
            990: {
              spaceBetween: 0,
              slidesPerView: 6,
            },
            700: {
              spaceBetween: 0,
              slidesPerView: 4,
            },
            200: {
              spaceBetween: 0,
              slidesPerView: 3,
            },
          }}
        >
          <div className="d-flex">
            {sortedSlides.map((item) => {
              return (
                <SwiperSlide
                  key={item.Id}
                  value={item.Id}
                  className={`d-flex flex-column align-items-center justify-content-center ${style.boxSize}`}
                  onClick={(evt) => changeId(item.Id)}
                >
                  <img
                    className={`${style.box} `}
                    src={require(`../../assets/${item.CoverImage}`)}
                    alt=""
                    value={item.Id}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default HomePage;
