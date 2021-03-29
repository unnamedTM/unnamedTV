import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";



const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const Slider_Comp = ({ defaultComp, comp, slidesToShow }) => {
  const [compIndex, setCompIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    default: defaultComp,
    swipeToSlide: true,
    focusOnSelect: true,
    
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setCompIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateComps = comp.map((comp, idx) => {
    if (comp !== null) {
      return (
        <div
          className={idx === compIndex ? "activeSlide" : "slide"}
          key={comp.id}
        >
          <div className="slideWrapper" style={{}}>
            {comp.comp}
            {/* {console.log(comp.comp)} */}
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateComps}</Slider>;
};

export default Slider_Comp;
