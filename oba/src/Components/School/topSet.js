import React from 'react'
import '../../Style/School.css'
import img1 from '../../Images/School/img1.png'
import img2 from '../../Images/School/img2.png'
import Slider from "react-slick";
import imgSlider1 from '../../Images/School/Slider/one.jpg'

const TopSet = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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

          <div className='row d-flex justify-content-center'>
            <span className='font2 head2'>
              Our School History
            </span>
            <div className='row myDivRow  align-items-center d-none d-md-block'>
              <div className='col-md-6 myDiv'>
                <Slider {...settings}>
                  <div>
                    <img src={imgSlider1}
                      alt="ImageOne"
                      className='imgOnSlider'
                    />
                    <div className='contentOnSlider text-wrap d-flex justify-content-center'>
                      Marhoom M A Rauf (Father of the Honorable Parliament Minister Rauf Hakeem),
                      The first Teacher of Dehianga Al Azhar Central College
                    </div>
                  </div>
                  <div>
                    <img src={imgSlider1}
                      alt="ImageOne"
                      className='imgOnSlider'
                    />
                    <div className='contentOnSlider text-wrap d-flex justify-content-center'>
                      Marhoom M A Rauf (Father of the Honorable Parliament Minister Rauf Hakeem),
                      The first Teacher of Dehianga Al Azhar Central College
                    </div>
                  </div>
                </Slider>
              </div>
              <div className='col-md-6 myDiv2'>
                <div className='container historyDiv'>
                  The protagonist of the college’s History named H L Omar Lebbe Hajiyar (Manager) was working at Kandy “Meeramakkam Mosque.”
                  He had the Vision of having a school in his town like the one seen in Infront
                  of the Meeramakkam mosque.
                  <br />
                  <br />
                  On 1937.12.13 he started the school named Muslim Mixed school and it is known that the first student was Marhoom M I M Ashraf
                  and  Marhoom M A Rauf (Father of the Honorable Parliament Minister Rauf Hakeem)
                  was the first teacher at that school.
                  <br />
                  <br />
                  In 1939 Marhoom Omar Lebbe's letter was accepted and the school became a government school and was named Dehianga Muslim Vidyalaya. On that occasion,
                  C W C Kannankara participated in that ceremony.
                  In the year 1951 Ordinary Level classes were started and in the year
                  1960 the school was upgraded to Maha Vidyalaya, In 1960 the school name
                  was changed to Al Azhar and the advanced-level grades were formed, In 1965
                  a model for the school was designed.
                  <br />
                  <br />
                  In 1978 two students from the school and got selected for the university. On 1994.02.18  the school was upgraded to
                  Maha Vidyalaya. Since then, many development projects have been carried out
                  with the help and coordination of various people like the School Development
                  Association members, the school’s Past Pupils, and well-wishers.
                  Raised since then, many development projects have been carried out with the
                  help of various people like the school development association members.
                  <br />
                  <br />
                  In 2021 under the 1000 school work projects the school has been upgraded to a
                  National school. We are proud to say that our school is going beyond the
                  development work by carrying out several development activities of our current
                  principal Ms. M T S  Naima.
                </div>
              </div>

            </div>
            <div className='row d-md-none g-3'>
              <div className='col-md-6 myDiv2Mobile'>
                <div className='container historyDiv '>
                  The protagonist of the college’s History named H L Omar Lebbe Hajiyar (Manager) was working at Kandy “Meeramakkam Mosque.”
                  He had the Vision of having a school in his town like the one seen in Infront
                  of the Meeramakkam mosque.
                  <br />
                  <br />
                  On 1937.12.13 he started the school named Muslim Mixed school and it is known that the first student was Marhoom M I M Ashraf
                  and  Marhoom M A Rauf (Father of the Honorable Parliament Minister Rauf Hakeem)
                  was the first teacher at that school.
                  <br />
                  <br />
                  In 1939 Marhoom Omar Lebbe's letter was accepted and the school became a government school and was named Dehianga Muslim Vidyalaya. On that occasion,
                  C W C Kannankara participated in that ceremony.
                  In the year 1951 Ordinary Level classes were started and in the year
                  1960 the school was upgraded to Maha Vidyalaya, In 1960 the school name
                  was changed to Al Azhar and the advanced-level grades were formed, In 1965
                  a model for the school was designed.
                  <br />
                  <br />
                  In 1978 two students from the school and got selected for the university. On 1994.02.18  the school was upgraded to
                  Maha Vidyalaya. Since then, many development projects have been carried out
                  with the help and coordination of various people like the School Development
                  Association members, the school’s Past Pupils, and well-wishers.
                  Raised since then, many development projects have been carried out with the
                  help of various people like the school development association members.
                  <br />
                  <br />
                  In 2021 under the 1000 school work projects the school has been upgraded to a
                  National school. We are proud to say that our school is going beyond the
                  development work by carrying out several development activities of our current
                  principal Ms. M T S  Naima.
                </div>
              </div>
              <div className='col-md-6 myDivMob'>
                <Slider {...settings}>
                  <div className='mySliderDiv'>
                    <img src={imgSlider1}
                      alt="ImageOne"
                      className='imgOnSliderMob'
                    />
                    <div className='contentOnSliderMob'>
                      Marhoom M A Rauf (Father of the Honorable Parliament Minister Rauf Hakeem),
                      The first Teacher of Dehianga Al Azhar Central College
                    </div>
                  </div>
                  <div className='mySliderDiv'>
                    <img src={imgSlider1}
                      alt="ImageOne"
                      className='imgOnSliderMob'
                    />
                    <div className='contentOnSliderMob'>
                      Marhoom M A Rauf (Father of the Honorable Parliament Minister Rauf Hakeem),
                      The first Teacher of Dehianga Al Azhar Central College asdsad
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSet