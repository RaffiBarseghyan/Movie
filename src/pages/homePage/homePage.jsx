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
  let x = 0;
  return (
    <>
      <div className={style.HomePage}>
        <div className={style.HeadBox}>
          {json.TendingNow.map((item) => {
            if (sessionStorage.getItem("Id") == null && x == 0) {
              x++;
              return (
                <div key={json.Featured.Id}>
                  <iframe
                    id="background-video"
                    className={style.backgroundVideo}
                    src={`${json.Featured.VideoUrl}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                  ></iframe>

                  <h3> {json.Featured.Category}</h3>
                  <img
                    className={style.TitleImage}
                    src={require(`../../assets/${json.Featured.TitleImage}`)}
                    alt=""
                  />
                  <div className="d-flex">
                    <p>{json.Featured.ReleaseYear}</p>
                    <p>{json.Featured.MpaRating}</p>
                    <p>{convertSeconds(json.Featured.Duration)}</p>
                  </div>
                  <h4>{json.Featured.Description}</h4>

                  <div className="mt-4">
                    <button className={style.PlayVideo}>
                      <FontAwesomeIcon icon={faPlay} className="me-2" />
                      Play
                    </button>
                    <button className={style.PlayInfo}>More Info</button>
                  </div>
                </div>
              );
            }
            if (item.Id == sessionStorage.getItem("Id")) {
              return (
                <div key={item.Id}>
                  <iframe
                    id="background-video"
                    className={style.backgroundVideo}
                    src={`${item.VideoUrl}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                  ></iframe>

                  <h3> {item.Category}</h3>
                  <img
                    className={style.TitleImage}
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
                </div>
              );
            }
          })}
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
          position={"center"}
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
              slidesPerView: 3,
            },
            500: {
              spaceBetween: 0,
              slidesPerView: 2,
            },
            100: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          }}
        >
          <div className="d-flex">
            {json.TendingNow.map((item) => {
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
