import React from 'react'
import TopNavbar from '../Bars/navbar'
import '../../Style/media.css'
import img1 from '../../Images/Media/myimage.png'
import Slider from "react-slick";

const LeftSet = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        initialSlide: 0,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: null,
        prevArrow: null
    };
    return (
        <div className='mediaPage'>
            <div className='containerMember'>
                <div className='row'>
                    <div className='col-5 actionCol d-none d-sm-block'>
                        <div className='row g-0'>
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
                                    <div className='setMember2 member2'>
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
                                    scrollamount="8"
                                >

                                    <div className='setMember member4'>

                                    </div>
                                    <div className='setMember2 member5'>

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
                                    scrollamount="10"
                                >

                                    <div className='setMember2 member7'>

                                    </div>
                                    <div className='setMember member8'>

                                    </div>
                                    <div className='setMember member9'>

                                    </div>
                                </marquee>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6 col-sm-12 sectionRight justify-content-start px-5'>
                        <div className='row'>
                            <div className='col'>
                                <h3 className='py-2'>About Media Unit</h3>
                                <p>The Media Unit of AACC OBA Media Unit was founded in the year 2023 as the Mass Media Unit under
                                    the Guidance of the AACC OBA Committee. The media unit of AACC OBA offers the student body ample
                                    opportunities to develop their technical and communication skills. We help them cultivate their skills
                                    in written media, graphic designing, audio, and video editing, and on occasion event Management.
                                </p>
                            </div>

                        </div>
                        <div className='col-sm-12 d-block d-sm-none'>
                            <div className='mySet'>
                                <div className='mySetInside'>
                                    <Slider {...settings}>
                                        <div className='setMemberMobile member1  g-1'>
                                            <img src={img1}
                                                alt="Muhannadh"
                                                className='actionImageMobile portrait'
                                            />
                                        </div>
                                        <div className='setMemberMobile member2  g-1'>
                                            <img src={img1}
                                                alt="Muhannadh"
                                                className='actionImageMobile portrait'
                                            />
                                        </div>
                                        <div className='setMemberMobile member3  g-1'>
                                            <img src={img1}
                                                alt="Muhannadh"
                                                className='actionImageMobile portrait'
                                            />
                                        </div>
                                        <div className='setMemberMobile member4  g-1'>
                                            <img src={img1}
                                                alt="Muhannadh"
                                                className='actionImageMobile portrait'
                                            />
                                        </div>
                                        <div className='setMemberMobile member5  g-1'>
                                            <img src={img1}
                                                alt="Muhannadh"
                                                className='actionImageMobile portrait'
                                            />
                                        </div>
                                        <div className='setMemberMobile member6  g-1'>
                                            <img src={img1}
                                                alt="Muhannadh"
                                                className='actionImageMobile portrait'
                                            />
                                        </div>
                                    </Slider>
                                </div>

                            </div>
                        </div>
                        <div className='row py-1'>
                            <h3 className='py-2'>Mission of the unit</h3>
                            <p>Refinement of creative and media energies in a knowledge society that stimulates learning and creativity through the use of the latest means and technologies,
                                in adedition to enhance communication and build bridges of cooperation between the College and the internal and external public in addition to managing and promoting marketing
                                and public relations strategies in collaboration with relevant departments for the purpose of increasing the goals and activities awareness and awareness among target groups.
                            </p>
                        </div>
                        <div className='row membersLayout'>
                            <h3 className='py-1'>Members</h3>
                            <button className='btn btnMembers'>
                                Irshard Abushaly
                            </button>
                            <button className='btn btnMembers'>
                                Ihshan Thahir
                            </button>
                            <button className='btn btnMembers'>
                                Shiraz Ahmed
                            </button>
                            <button className='btn btnMembers'>
                                Muhannadh
                            </button>
                            <button className='btn btnMembers'>
                                Abdullah
                            </button>
                            <button className='btn btnMembers'>
                                Mohamed Munshid
                            </button>
                            <button className='btn btnMembers'>
                                Mohamed Shukry
                            </button>
                            <button className='btn btnMembers'>
                                Mohamed Farhan
                            </button>
                            <button className='btn btnMembers'>
                                Arshard Khan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSet