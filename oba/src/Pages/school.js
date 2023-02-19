import React, { useState, useEffect } from 'react'
import TopNavbar from '../Components/Bars/navbar'
import { motion } from 'framer-motion'
import { MutatingDots } from 'react-loader-spinner'
import imgLogo from '../Images/Home/Logo.png'

const School = () => {
    const [loading, setLoading] = useState(false);

    const page_load_time = performance.getEntriesByType("navigation")[0];
    const time = `${page_load_time.loadEventEnd}`;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, time)
    }, [])

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale = 0.86, maximum-scale=3.0, minimum-scale=0.86"></meta>
            {
                loading ?
                    <div className='row  d-flex flex-column justify-content-center align-items-center theRowToLoader'>
                        <div className='col-12 d-flex flex-column justify-content-end align-items-center loadingArea'>
                            <img src={imgLogo} width={70} height={70} alt="logo" className='LoadLogo'/>
                            <MutatingDots
                                height="100"
                                width="100"
                                color="#D18F37"
                                secondaryColor='#92002A'
                                radius='12.5'
                                ariaLabel="mutating-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                className='iconClass'
                            />
                        </div>
                    </div>
                    :
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                    >
                        <TopNavbar />
                    </motion.div>
            }

        </div>
    )
}

export default School
