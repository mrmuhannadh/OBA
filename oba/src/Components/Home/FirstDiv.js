import React, { useEffect,useState, Fragment } from 'react'
import '../../Style/Home.css'
import TopNavbar from '../Bars/navbar'
import imgBg from '../../Images/Home/sclHome.jpg'
import AOS from 'aos'
import logo from '../../Images/Home/LogoTwo.png'
import NewSlick from './NewSlick'
import * as Icon from 'react-bootstrap-icons'

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
            <div
                style={{
                    backgroundImage: `url(${imgBg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                className='HomeBgClass'
            >
                <div className='contentDiv d-flex justify-content-start align-items-center '>
                    <div className='theDetails px-3'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <img src={logo} alt="logo" className='topLogo' />
                                    <p className='paraOne' data-aos="zoom-in">Al-Azhar National Collage</p>
                                    <h1 className='headingOne' data-aos="zoom-in">OLD BOYS ASSOCIATION</h1>
                                    <p data-aos="zoom-out-up">
                                        Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing.
                                        Grammarly Has a Tool For Just About Every Kind Of Writing You Do.
                                        Try It Out For Yourself! Eliminate Grammar Errors. Improve Word Choice
                                    </p>
                                    <button className='btn btn-default btnComm'
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="500"
                                    >Learn More</button>
                                </div>
                                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                                    <NewSlick />
                                </div>
                            </div>

                        </div>
                        <div className='container'>
                            <div className='row myRow bottomLine'>
                                <div className='col-md-6 col-sm-6 d-flex justify-content-start align-items-center'>

                                    <div className='col'>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <Icon.Facebook size={25} />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <Icon.Instagram size={25} />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <Icon.Linkedin size={25} />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='iconDiv d-flex justify-content-center align-items-center'>
                                            <Icon.Whatsapp size={25} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-6 d-flex justify-content-center align-items-center'>
                                    <span className='d-none d-sm-block'>
                                        <div className={colorChange ? 'mouseDiv mb-3 p-2 d-flex justify-content-center align-items-center' : 'mouseIconCustom mb-3 p-2'}>
                                            <Icon.Mouse className='mouseIcon' size={40} />
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