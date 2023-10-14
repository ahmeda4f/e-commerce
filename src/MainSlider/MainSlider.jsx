import React from 'react'
import Slider from "react-slick";

import slider2 from './slider-image-1.jpeg';
import slider3 from './slider-image-2.jpeg';
import side1 from './blog-img-1.jpeg' 
import side2 from './blog-img-2.jpeg' 
import slider1 from './slider-image-3.jpeg';


function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        arrows : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-9 p-0 mb-5'>
            <Slider {...settings}>
                <img src={slider1} className='w-100' height = {400} alt=''/>
                <img src={slider2} className='w-100' height = {400} alt=''/>
                <img src={slider3} className='w-100' height = {400} alt=''/>
            </Slider>
            </div>
            <div className='col-md-3 p-0'>
            <img src={side1} className='img-fluid' style={{ height: '200px' }} alt='' />
            <img src={side2} className='img-fluid' style={{ height: '200px' }} alt='' />
            </div>
        </div>
    </div>
  )
}

export default MainSlider
