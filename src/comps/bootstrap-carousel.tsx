import React from "react";



import dimitri from './dimitri.jpg'
import ProfilesCarousel from './carousel-profile';
import alex from '../img/alex.png';
import kappa from '../img/haha.jpg';
import lingduck from '../img/dimitri.jpg'

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>

        <img src={alex} alt="" />
        <img src={alex} alt="" />
    </Slider>
  );
}
