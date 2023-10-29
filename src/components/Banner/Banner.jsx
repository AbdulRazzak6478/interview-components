import React, { useEffect } from "react";
import img1 from "../../assets/carousel/1.jpg";
import img2 from "../../assets/carousel/2.jpg";
import img3 from "../../assets/carousel/3.jpg";
import img4 from "../../assets/carousel/4.jpg";
import img5 from "../../assets/carousel/5.jpg";
import img6 from "../../assets/carousel/6.jpg";
import img7 from "../../assets/carousel/7.jpg";
import img8 from "../../assets/carousel/8.jpg";
import img9 from "../../assets/carousel/9.jpg";
import img10 from "../../assets/carousel/10.jpg";
import "./Banner.css";
import { BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi";
import { useState } from "react";

const src_object = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
  {
    image: img9,
  },
  {
    image: img10,
  },
];
const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  let timerOut = null;
  useEffect(() => {
    timerOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 4000);
  });

  function slideLeft() {
    if (current === 0) {
      setCurrent(src_object.length - 1);
    } else setCurrent(current - 1);
  }
  function slideRight() {
    if (current === src_object.length - 1) {
      console.log("executed");
      setCurrent(0);
    } else setCurrent(current + 1);
  }
  return (
    <>
      <div className="carousel">
        <div className="carousel-wrapper" 
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timerOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
            clearTimeout(timerOut);
          }}>
          {src_object.map((obj, index) => {
            return (
              <div
                className={
                  index === current
                    ? "carousel-card carousel-card-active"
                    : "carousel-card"
                }
                key={index}
              >
                <img src={obj.image} alt="img" className="img-card" />
              </div>
            );
          })}
          <div className="carousel-left-arrow" onClick={slideLeft}>
            <BiSolidChevronsLeft />
          </div>
          <div className="carousel-right-arrow" onClick={slideRight}>
            <BiSolidChevronsRight />
          </div>
          <div className="carousel-pagination">
            {src_object.map((image, index) => {
              return <div key={index} onClick={() => setCurrent(index)} className={
                index === current
                  ? "pagination-dot pagination-dot-active"
                  : "pagination-dot"
              }></div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
