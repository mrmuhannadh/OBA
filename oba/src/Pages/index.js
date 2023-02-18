import React from 'react'
import Events from '../Components/Home/events'
import FirstDiv from '../Components/Home/FirstDiv'
import Slider from '../Components/Home/slider'
import VandM from '../Components/Home/VandM'
import '../Style/Home.css'

const Index = () => {
    return (
        <>

            <FirstDiv />
            <VandM />
            <Slider />
            <Events />
        </>
    )
}

export default Index