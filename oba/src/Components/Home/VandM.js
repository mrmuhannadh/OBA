import React, { useEffect } from 'react'
import '../../Style/VM.css'
import * as Icon from 'react-bootstrap-icons'
import AOS from 'aos'

const VandM = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div className='VisionAndMission'>
            <div className='container'>
                <div className='row'>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Our Mission and Vision</h1>
                </div>
                <div className='container'>
                    <div className='row threeBoxes d-flex justify-content-center'>
                        <div className='col-md-3 mx-2 divMid' data-aos="fade-up-right">
                            <Icon.GraphUpArrow className='iconRound' size={45} />
                            <h4>Future Proof</h4>
                            <p>
                                A text set is a collection of sources that support a common theme, issue or topic.
                                Text sets should include a variety of genres, text types, levels and formats.
                            </p>
                        </div>
                        <div className='col-md-3 mx-2 divMid' data-aos="zoom-in-up">
                            <Icon.Compass className='iconRound' size={45} />
                            <h4>Future Proof</h4>
                            <p>
                                A text set is a collection of sources that support a common theme, issue or topic.
                                Text sets should include a variety of genres, text types, levels and formats.
                            </p>
                        </div>
                        <div className='col-md-3 mx-2 divMid' data-aos="fade-up-left">
                            <Icon.Sun className='iconRound' size={45} />
                            <h4>Future Proof</h4>
                            <p>
                                A text set is a collection of sources that support a common theme, issue or topic.
                                Text sets should include a variety of genres, text types, levels and formats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VandM