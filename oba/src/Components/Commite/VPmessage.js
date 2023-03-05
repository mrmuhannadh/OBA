import React from 'react'
import pic from '../../Images/Media/myimage.png'

const VPmessage = () => {
    return (
        <div className='rOne'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <h2 className='font2'>
                        Vice President Message
                    </h2>
                    <div className='row myBoxVP '>
                        <div className='col-md-4'>
                            <div className='myBoxVPPic'>
                                <img src={pic}
                                    alt="MyPic"
                                    className='VPpic' />
                                <p className='text-center font3 text-nowrap'>
                                    Salahudeen Rimsan
                                    <br />
                                    <span className='signature'>
                                        Vice President
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='col-md-8 text-start d-flex flex-wrap '>
                            A Message<br />
                            from Our Vice President<br />
                            <br />
                            Dear fellow Azharian’s,
                            <p>
                                Welcome to the website of the Al Azhar Center Collage’s ‘Old Boys’ Association (ACD OBA) The Committee of Management (COM) and I hope to continue to update the website with the latest information about the activities of the Association to link all members wherever they may be. We have requested all Sub-Committees, Batch Groups, Branches, and Foundations of the ACD OBA to regularly provide information about their activities to be updated. Please refer to the pages on this site for more information.
                            </p>
                            <p>
                                The main focus of the COM will be to reach the membership globally, increase the patronage and membership. We hope to build synergies when participating in activities of the OBA and the College by connecting Old Boys and taking advantage of their professional experience and expertise.
                                I would greatly appreciate your ideas, feedback, and proposals on the above points and any others that you think are important for the ACD OBA to reach me.
                            </p>
                            Thank you,<br />
                            Rinsan Salahudeen.Vice President – OBA,<br />
                            ice.president@alazharccdoba.org
                                                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VPmessage