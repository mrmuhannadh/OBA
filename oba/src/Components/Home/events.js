import React from 'react'
import img1 from '../../Images/Home/Events/1.jpg'
import img2 from '../../Images/Home/Events/2.jpg'
import img3 from '../../Images/Home/Events/3.jpg'
import img4 from '../../Images/Home/Events/4.jpg'
import img5 from '../../Images/Home/Events/6.jpg'
import * as Icon from 'react-bootstrap-icons'
import AOS from 'aos'

const Events = () => {
    return (
        <>
            <div className='EventSet container'>
                <div className='row grid mRow'>
                    <div className='col-md-4 col-sm-4'>
                        <div className='box mbox' data-aos="fade-up-right"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${img1})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className='iconSet'>
                                <Icon.ArrowUpRightCircle size={40} className='mYicon' data-aos="fade-up-right" />
                            </div>
                            <div className='textSet'>

                                <h2>85th Celebration</h2>
                                <p class="text-md-left">Show More</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <div className='box mbox' data-aos="fade-up"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${img2})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className='iconSet'>
                                <Icon.ArrowUpRightCircle size={40} className='mYicon' />
                            </div>
                            <div className='textSet'>

                                <h2>Sports Meet 2020</h2>
                                <p class="text-md-left">Show More</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <div className='box mbox' data-aos="fade-up-left"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${img3})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className='iconSet'>
                                <Icon.ArrowUpRightCircle size={40} className='mYicon' />
                            </div>
                            <div className='textSet'>

                                <h2>Seminar 2020</h2>
                                <p class="text-md-left">Show More</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row grid mRow'>
                    <div className='col-md-4 col-sm-4'>
                        <div className='box mbox' data-aos="fade-up-right"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${img4})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className='iconSet'>
                                <Icon.ArrowUpRightCircle size={40} className='mYicon' />
                            </div>
                            <div className='textSet'>

                                <h2>Seminar 2019</h2>
                                <p class="text-md-left">Show More</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <div className='box mbox' data-aos="fade-up"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${img5})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className='iconSet'>
                                <Icon.ArrowUpRightCircle size={40} className='mYicon' />
                            </div>
                            <div className='textSet'>

                                <h2>Seminar 2018</h2>
                                <p class="text-md-left">Show More</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <div className='box mbox' data-aos="fade-up-left">
                            Hi
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events