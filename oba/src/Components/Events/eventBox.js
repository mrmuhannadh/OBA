import React, { Component } from "react";
import Slider from "react-slick";
import ev1 from '../../Images/Events/Event1/eve1.jpg'

const EventBox = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        fade: false,
        lazyLoad: true,
        arrows:true
    };
    return (
        <div className='rowOne'>
            <div className='container'>
                <div className='row myBoxEvent'>
                    <div className='col-md-5 sliderBoxEvent'>
                        <Slider {...settings}>
                            <div className="eventSlider">
                                <img src={ev1}
                                    alt="Event 1"
                                    className="eventImage"
                                />
                            </div>
                            <div className="eventSlider">
                                <img src={ev1}
                                    alt="Event 1"
                                    className="eventImage "
                                />
                            </div>
                        </Slider>
                    </div>
                    <div className='col-md-7 contentBoxEvent'>
                        <div className='row p-5'>
                            <span className='font3'>20 DECEMBER 2022</span>
                            <h2 className='font2'>85th Celebration </h2>
                            <div className=''>
                                <p>
                                    In 1939 Marhoom Omar Lebbe's letter was accepted and the school became a government school
                                    and was named Dehianga Muslim Vidyalaya. On that occasion, C W C Kannankara
                                    participated in that ceremony. In the year 1951 Ordinary Level classes were
                                    started and in the year 1960 the school was upgraded to Maha Vidyalaya,
                                    In 1960 the school name was changed to Al Azhar and the advanced-level grades
                                    were formed, In 1965 a model for the school was designed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row myBoxEvent'>
                    <div className='col-md-5 sliderBoxEvent'>
                        <Slider {...settings}>
                            <div className="eventSlider">
                                <img src={ev1}
                                    alt="Event 1"
                                    className="eventImage"
                                />
                            </div>
                            <div className="eventSlider">
                                <img src={ev1}
                                    alt="Event 1"
                                    className="eventImage "
                                />
                            </div>
                        </Slider>
                    </div>
                    <div className='col-md-7 contentBoxEvent'>
                        <div className='row p-5'>
                            <span className='font3'>20 DECEMBER 2022</span>
                            <h2 className='font2'>85th Celebration </h2>
                            <div className=''>
                                <p>
                                    In 1939 Marhoom Omar Lebbe's letter was accepted and the school became a government school
                                    and was named Dehianga Muslim Vidyalaya. On that occasion, C W C Kannankara
                                    participated in that ceremony. In the year 1951 Ordinary Level classes were
                                    started and in the year 1960 the school was upgraded to Maha Vidyalaya,
                                    In 1960 the school name was changed to Al Azhar and the advanced-level grades
                                    were formed, In 1965 a model for the school was designed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventBox