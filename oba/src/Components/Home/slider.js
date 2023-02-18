import React from 'react'
import Slick from 'react-slick'
import img1 from '../../Images/Home/Slider/img1.webp'
import img2 from '../../Images/Home/Slider/img2.jpeg'
import img3 from '../../Images/Home/Slider/img3.webp'
import img4 from '../../Images/Home/Slider/img4.jpeg'
import img5 from '../../Images/Home/Slider/img5.jpg'
import img6 from '../../Images/Home/Slider/img6.jpg'

const Slider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
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
        <div className='SliderSec'>

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