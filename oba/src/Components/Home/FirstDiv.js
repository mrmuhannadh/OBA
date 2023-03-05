import React, { useEffect, useState, Fragment } from 'react'
import '../../Style/Home.css'
import TopNavbar from '../Bars/navbar'
import imgBg from '../../Images/Home/sclHome.jpg'
import vidBg from '../../Images/Home/Landing.mp4'
import mouseIcon from '../../Images/Home/Nav/mouse.gif'
import AOS from 'aos'
import logo from '../../Images/Home/LogoTwo.png'
import NewSlick from './NewSlick'
import * as Icon from 'react-bootstrap-icons'
import fb from '../../Images/Home/Icons/FB.svg'
import whatsapp from '../../Images/Home/Icons/Whatsapp.svg'
import insta from '../../Images/Home/Icons/Instagram.svg'
import linked from '../../Images/Home/Icons/Linkdin.svg'
import FirstRight from './firstRight'

const FirstDiv = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const [colorChange, setColorchange] = useState(true);
    const changeNavbarColor = () => {

        if (window.scrollY <= 0) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div className='HomeStyle'>
            <div className='mainVid'>
                <video src={vidBg} autoPlay muted loop className='myVideo'/>
            </div>
            <div

            >
                <div className='contentDiv d-flex justify-content-start align-items-center '>
                    <div className='theDetails px-2'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-7 topLeft'>
                                    <img src={logo} alt="logo" className='topLogo' />
                                    <p className='font3'>
                                        SINCE 1937
                                    </p>
                                    <h1 className='headingOne' data-aos="zoom-in">OLD BOYS ASSOCIATION</h1>

                                    <p data-aos="zoom-out-up" className='font4 aboutSchoolSec'>
                                        Join the Al Azhar Central College's Old Boys’
                                        Association and give back to the school that has given us
                                        so much. Celebrate camaraderie and shape the future.
                                    </p>
                                    <button className='btn btn-default btnComm'
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="500"
                                    >Learn More</button>
                                </div>
                                <div className='col d-flex justify-content-center align-items-center'>
                                    {/*<NewSlick />*/}
                                    <FirstRight />
                                </div>
                            </div>

                        </div>
                    
                        <div className='container'>
                            <div className='row myRow bottomLine '>
                                <div className='col-md-4 col-sm-6 d-flex justify-content-start align-items-center'>

                                    <div className='col d-none d-sm-block '>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <img src={fb}
                                                alt="fb"
                                                className='icon fbicon'
                                            />
                                        </div>
                                    </div>
                                    <div className='col d-none d-sm-block'>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <img src={insta}
                                                alt="insta"
                                                className='icon instaicon'
                                            />
                                        </div>
                                    </div>
                                    <div className='col d-none d-sm-block'>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <img src={linked}
                                                alt="fb"
                                                className='icon linkedinicon'
                                            />
                                        </div>
                                    </div>
                                    <div className='col d-none d-sm-block'>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <img src={whatsapp}
                                                alt="whats"
                                                className='icon whatsappicon'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6 d-flex justify-content-center align-items-center'>
                                    <span className='d-none d-sm-block'>
                                        <div className={colorChange ? 'mouseDiv mb-3 p-2 ' : 'mouseIconCustom mb-3 p-2'}>
                                            <img src={mouseIcon} className='mouseIcon' alt='mouse' />
                                        </div>
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <TopNavbar className='topNavStyle' />

        </div>
    )
}

export default FirstDiv