import React, { useEffect } from 'react'
import '../../Style/Home.css'
import TopNavbar from '../Bars/navbar'
import imgBg from '../../Images/Home/sclHome.jpg'
import AOS from 'aos'

const FirstDiv = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
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
                <div className='contentDiv d-flex justify-content-start align-items-center'>
                    <div className='theDetails px-3'>
                        <div className='container'>
                            <div className='col-md-8 '>
                                <p className='paraOne' data-aos="zoom-in-down">Al-Azhar National Collage</p>
                                <h1 className='headingOne' data-aos="zoom-in">OLD BOYS ASSOCIATION</h1>
                                <p data-aos="zoom-out-up">
                                    Online Grammar and Writing Checker To Help You Deliver Impeccable, Mistake-free Writing.
                                    Grammarly Has a Tool For Just About Every Kind Of Writing You Do.
                                    Try It Out For Yourself! Eliminate Grammar Errors. Improve Word Choice
                                </p>
                                <button className='btn btn-default btnLearnMore'
                                    data-aos="fade-right" 
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    
                                >Learn More</button>
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