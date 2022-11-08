import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleService from '../../Components/SingleService/SingleService'
import Slider from '../../Components/Slider/Slider'
import { pageTitle } from '../../utils/PageTitle'

const Home = () => {
    const threeService = useLoaderData();
    pageTitle('Home - Get Your Teeth Fixed');

    return (
        <div>
            <Slider />
            <SingleService threeService={threeService} />
        </div>
    )
}

export default Home