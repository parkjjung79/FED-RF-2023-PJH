// 스와이퍼 플러그인 기능 컴포넌트

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "./css/swiper.css";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 페이지네이션, 네비게이션,자동넘김)
import { Pagination,Navigation,Autoplay } from "swiper/modules";
import { useRef } from "react";

export function SwiperApp() {



  // 불러올 이미지 리스트
  const imgArr = [
    "dcm43",
    "dcm28",
    "dcm29",
    "dcm30",
    "dcm31",
    "dcm32",
    "dcm33",
    "dcm34",
    "dcm35",
  ];

  // useRef로 스와이퍼 객체를 받아온다!
  const myRef = useRef(null);

  // 플레이/멈춤기능 함수
  const stopPlay = () => {
    console.log('멈추거나 플레이!');

  }; ///////////////// stopPlay함수 /////////////////

  // 리턴코드 //////////////////////////////////////////////////////
  return (
    <> 
      <Swiper
      /* ref 속성에 useRef 할당변수를 넣어서 외부에 연결함 */
      ref={myRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        {
            imgArr.map((v,i)=>
            <SwiperSlide key={i}>{}
                <img src={"./images/"+v+".jpg"} alt="list image" />
            </SwiperSlide>)
        }
        
      </Swiper>
      {/* 플레이/멈춤버튼 */}
      <button
      className="stopPlay"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '40px',
        display:'block',
        with: '40px',
        margin: '0 auto',
        cursor: 'pointer'
      }}
      title="멈추기"
      onClick={stopPlay}
      >▣</button>
    </>
  );
} ////////////// SwiperApp 컴포넌트 //////////////
