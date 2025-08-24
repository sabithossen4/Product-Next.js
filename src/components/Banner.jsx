"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


function Banner() {
  const data = [
    {
      title: "Elegant Modern Sofa for Luxurious Living",
      description: "Sleek comfort for your living room.",
      image: "/assets/slide1-demo1.webp"
    },
    {
      title: "Handcrafted Wooden Dining Table for Family Gatherings",
      description: "Classic design with lasting quality.",
      image: "/assets/slide2-demo1.webp"
    },
    {
      title: "Cozy Armchair Designed for Ultimate Relaxation",
      description: "Soft fabric, premium comfort.",
      image: "/assets/slide3-demo1.webp"
    }
  ];

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {data.map((da, index) => (
          <div key={index} className="relative w-full h-[700px] max-w-screen">
            {/* Full width image */}
            <Image
              src={da.image}
              alt={da.title}
              fill
             
              className="object-cover object-center h-full w-full"
            />
            {/* Overlay text */}
            <div className="absolute inset-0 bg-black/40    text-white p-6">
            <div className="w-[80%] md:w-[60%] lg:w-[40%] relative top-[30%] left-[10%] space-y-4">
            <p className="badge bg-transparent text-white"> Furnishing Dreams</p>
              <h2 className="text-3xl md:text-6xl font-bold mb-2">
                {da.title}
              </h2>
              <p className="text-sm md:text-lg">{da.description}</p>
              <button className="btn text-white btn-primary">Discover Our Collection</button>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;