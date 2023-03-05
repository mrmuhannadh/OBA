import React, { Component } from "react";
import Slider from "react-slick";
import add1 from '../../Images/Ads/bake.jpg'
import add2 from '../../Images/Ads/bega.jpg'
import add3 from '../../Images/Ads/english.jpg'
import add4 from '../../Images/Ads/oppomint.jpg'

const NewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        initialSlide: 0,
        slidesToScroll: 1,
        cssEase: "linear"
    };
    return (
        <div className="newSlider my-2">
            <Slider {...settings}>
                <div className="sliderBox  d-flex justify-content-center align-items-center">
                    <img src={add2}
                        alt="add"
                        className="addImage"
                    />
                    <div className="blackBox"></div>
                </div>
                <div className="sliderBox  d-flex justify-content-center align-items-center">
                    <img src={add1}
                        alt="add"
                        className="addImage"
                    />
                    <div className="blackBox"></div>
                </div>
                <div className="sliderBox  d-flex justify-content-center align-items-center">
                    <img src={add3}
                        alt="add"
                        className="addImage"
                    />
                    <div className="blackBox"></div>
                </div>
                <div className="sliderBox  d-flex justify-content-center align-items-center">
                    <img src={add4}
                        alt="add"
                        className="addImage"
                    />
                    <div className="blackBox"></div>
                </div>

            </Slider>
        </div>
    )
}

export default NewSlider