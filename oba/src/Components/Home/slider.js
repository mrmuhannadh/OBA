import React from 'react'
import Slick from 'react-slick'
import img1 from '../../Images/Home/Slider/1.jpg'
import img2 from '../../Images/Home/Slider/2.jpg'
import img3 from '../../Images/Home/Slider/3.jpg'
import img4 from '../../Images/Home/Slider/4.jpg'
import img5 from '../../Images/Home/Slider/5.jpg'
import img6 from '../../Images/Home/Slider/6.jpg'
import AOS from 'aos'

const Slider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='SliderSec' data-aos="zoom-in-up">

            <Slick {...settings}>
                
                <div className='mySlider'>
                    <img src={img1} 
                        className='imgSlider'
                        alt='imgSlider'
                    />
                </div>
                <div className='mySlider'>
                <img src={img2} 
                        className='imgSlider'
                        alt='imgSlider'
                    />
                </div>
                <div className='mySlider'>
                <img src={img3} 
                        className='imgSlider'
                        alt='imgSlider'
                    />
                </div>
                <div className='mySlider'>
                <img src={img4} 
                        className='imgSlider'
                        alt='imgSlider'
                    />
                </div>
                <div className='mySlider'>
                <img src={img5} 
                        className='imgSlider'
                        alt='imgSlider'
                    />
                </div>
                <div className='mySlider'>
                <img src={img6} 
                        className='imgSlider'
                        alt='imgSlider'
                    />
                </div>
            </Slick>
        </div>
    )
}

export default Slider