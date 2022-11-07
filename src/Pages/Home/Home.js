import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleService from '../../Components/SingleService/SingleService'
import Slider from '../../Components/Slider/Slider'

const Home = () => {
    const threeService = useLoaderData();

    return (
        <div>
            <Slider />
            <SingleService threeService={threeService} />
        </div>
    )
}

export default Home