import React from 'react'
import TopNavbar from '../Bars/navbar'
import '../../Style/media.css'
import Marquee from "react-fast-marquee";
import img1 from '../../Images/Media/myimage.png'

const LeftSet = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 actionCol'>
                        <div className='row'>
                            <div className='col'>
                                <marquee direction="down"
                                    behavior="alternate"
                                    loop="infinite"
                                    className="myMarquee text-center"
                                >

                                    <div className='setMember member1 '>
                                        <p className='actionTopic '>M.R. Muhannadh</p>
                                        <img src={img1}
                                            alt="Muhannadh"
                                            className='actionImage portrait'
                                        />
                                    </div>
                                    <div className='setMember member2'>
                                    <p className='actionTopic'>M.R. Muhannadh</p>
                                        <img src={img1}
                                            alt="Muhannadh"
                                            className='actionImage shadow'
                                        />
                                    </div>
                                    <div className='setMember member3'>
                                    <p className='actionTopic'>M.R. Muhannadh</p>
                                        <img src={img1}
                                            alt="Muhannadh"
                                            className='actionImage shadow'
                                        />
                                    </div>
                                </marquee>
                            </div>
                            <div className='col myColSlider'>
                                <marquee direction="up"
                                    behavior="alternate"
                                    loop="infinite"
                                    className="myMarquee"
                                >

                                    <div className='setMember member4'>

                                    </div>
                                    <div className='setMember member5'>

                                    </div>
                                    <div className='setMember member6'>

                                    </div>
                                </marquee>
                            </div>
                            <div className='col'>
                                <marquee direction="down"
                                    behavior="alternate"
                                    loop="infinite"
                                    className="myMarquee"
                                >

                                    <div className='setMember member7'>

                                    </div>
                                    <div className='setMember member8'>

                                    </div>
                                    <div className='setMember member9'>

                                    </div>
                                </marquee>
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>Two</div>
                </div>
            </div>
        </>
    )
}

export default LeftSet