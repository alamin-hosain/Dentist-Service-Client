import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleService from '../../Components/SingleService/SingleService'
import Slider from '../../Components/Slider/Slider'
import { AuthContext } from '../../contexts/AuthProvider'
import { pageTitle } from '../../utils/PageTitle'
import UserCreatedService from './UserCreatedService'

const Home = () => {
    const { user, loading } = useContext(AuthContext);
    const [createdServices, setCreatedServices] = useState([]);


    const threeService = useLoaderData();
    pageTitle('Home - Get Your Teeth Fixed');

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-alamin-hosain.vercel.app/userservice?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCreatedServices(data)
            })
    }, [user?.email])

    return (
        <div>
            <Slider />

            {loading &&
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin mx-auto dark:border-green-700">
                </div>
            }

            {
                user?.email &&
                <div>

                    {
                        createdServices.map(service => <UserCreatedService key={service._id} service={service} />)
                    }
                </div>
            }

            <SingleService threeService={threeService} />
        </div>
    )
}

export default Home