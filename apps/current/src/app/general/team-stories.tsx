import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Stories } from "./general.dto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { easing } from "@mui/material";

const TeamStories = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 2250,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "4vw",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1900,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "4.5vw",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1800,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "5vw",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1540,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "5.5vw",
                padding: "0px",
                listStyle: "inside",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "inside", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1441,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "6vw",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "inside", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1300,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "7vw",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1140,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "8vw",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 1024,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "9vw",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 890,
        settings: {
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0.5rem",
                bottom: "0px",
                marginLeft: "11vw",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 768.5,
        settings: {
          speed: 1500,
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                bottom: "4vh  ",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 480,
        settings: {
          speed: 1500,
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0",
                margin: "0 22vw 0 24vw",
                width: "fit-content",
                padding: "0px",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "inside", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 376,
        settings: {
          speed: 1500,
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0",
                margin: "0 22vw 0 20vw",
                width: "fit-content",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 321,
        settings: {
          speed: 1500,
          appendDots: (dots: any) => (
            <div
              style={{
                height: "20px",
                top: "0",
                margin: "0 22vw 0 16vw",
                width: "fit-content",
                padding: "0px",
                listStyle: "none",
              }}
            >
              <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
                {dots}
              </ul>
            </div>
          ),
        }
      },
      {
        breakpoint: 300,
        settings: {
          dots: false
        }
      }
    ],
    customPaging: (i: any) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "transparent", // Transparent background
          border: "1px solid #FFF", // White border
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    ),
    appendDots: (dots: any) => (
      <div
        style={{
          //Default view for screen > 2250px
          position: "absolute",
          height: "20px",
          top: "0.5rem",
          bottom: "0px",
          marginLeft: "3vw",
          padding: "0px",
          listStyle: "none",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", justifyContent: "center" }}>
          {dots}
        </ul>
      </div>
    ),


  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 MobileScreen:mx-[1.2rem] lg:mx-[8.06%] md:mx-[2rem] my-[10rem] mb-8 MobileScreen:mb-12 xl:mb-[8rem]">
      <h1 className="font-hackathoneCabinetGrotesk text-hackathone-font-rocket-red font-extrabold lg:text-[42px] md:text-[32.99px] text-[42px] MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px]">
        Hackathon Unplugged: Team Stories
      </h1>
      <p className="font-hackathoneSFProDisplay lg:text-xl sm:text-lg text-base mt-4">
        Let's hear what the Teams have to say
      </p>
      <div className="relative overflow-hidden rounded-lg shadow-md mt-8 MobileScreen:min-h-[650px] min-h-[600px] md:min-h-[400px]">
        <Slider {...settings}>
          {Stories.map((item, index) => (
            <div key={index} className="items-stretch !flex md:!flex-row !flex-col h-auto items-center justify-center">
              <div className="md:w-1/2 w-full !flex md:items-center MobileScreen:justify-center justify-center md:justify-start max-h-[560px] TabletScreen:px-4 MobileScreen:mt-[2.5rem]">
                <Image
                  className="cursor-pointer rounded-2xl max-w-[100%] max-h-[350px] MobileScreen:max-h-[320px]"
                  src={item.img}
                  width={500}
                  height={450}
                  alt={"Team Image"}
                />
              </div>
              <div className="md:w-1/2 w-full md:mt-4 md:text-left md:ml-[2.5rem] xl:ml-[2rem] 2xl:ml-[1rem] w-auto pt-[2rem] MobileScreen:pr-[1rem] md:pt-[0px] pr-[1rem] text-center">
                <p className="font-hackathoneCabinetGrotesk text-lg max-w-prose md:pt-[2.5rem] sm:pt-[2rem] MobileScreen:pb-[2rem]">
                  {item.text}
                </p>
                <p className="font-bold text-[22px] leading-[1.5rem] text-hackathone-font-rocket-red sm:pt-[3rem] MobileScreen:pt-[2rem] pt-[3rem] text-center md:text-left">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamStories;
