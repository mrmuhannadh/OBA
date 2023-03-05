import React from 'react'
import '../../Style/School.css'
import img1 from '../../Images/School/img1.png'
import img2 from '../../Images/School/img2.png'
import Slider from "react-slick";
import imgSlider1 from '../../Images/School/Slider/one.jpg'

const TopSet = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
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
    <div>
      <div className='container'>
        <div className='row rowOne '>
          <div className='col myBox '>
            <div className='insideBox d-flex justify-content-center align-items-center'>
              <img src={img1}
                alt="Umar Lebbe"
                className='imgInBox'
              />
              <p className='text-start font3 text-nowrap'>
                Marhoom Al-Hajj H.L <br />
                Umar Lebbe
                <br />
                <span className='signature'>
                  Founder
                </span>
              </p>
              <br />

            </div>
          </div>
          <div className='col myBox'>
            <div className='insideBox d-flex justify-content-center align-items-center'>
              <img src={img2}
                alt="Umar Lebbe"
                className='imgInBox'
              />
              <p className='text-start font3 text-nowrap'>
                Ms. M T S  Naima
                <br />
                <span className='signature'>
                  Principal
                </span>
              </p>
              <br />

            </div>
          </div>

          <div className='col-md-12 myBox d-flex justify-content-center align-items-center'>
            <h3 className='font3 head3Msg'>
              Message from the Principal
            </h3>
            <p>
              “In 1978 two students from our school got selected for the university.
              On 1994.02.18  our school was upgraded to Maha Vidyalaya school.
              Since then, many development projects have been carried out with the help and coordination of various people like our school development association members, old students, and well-wishers.
            </p>
          </div>

          <div className='row'>
            <span className='font2 head2'>
              Our School History
            </span>
            <div className='row myDivRow'>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSet