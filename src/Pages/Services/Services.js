import React, { useEffect, useState } from 'react'
import BelowMenu from '../../Components/Shared/BelowMenu'
import SingleCard from './SingleCard';


const Services = () => {
    const [allservices, setAllService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/servicesall')
            .then(res => res.json())
            .then(data => {
                setAllService(data)
            })
    }, [])


    return (
        <>
            <BelowMenu title={'Services'} />
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row space-x-6">
                    <div className=' w-full lg:w-1/2'>
                        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80" className="w-full rounded-lg shadow-2xl " alt='' />
                    </div>
                    <div className='w-full lg:w-1/2 mt-12 lg:mt-0'>
                        <h3 className='mb-6 text-[#f36259] font-semibold'>WELCOME TO NUFFIELD DENTAL</h3>
                        <h1 className="text-3xl md:text-5xl font-bold">List Of Our Services</h1>
                        <p className="py-6">Our services are varied and provide solutions to a large range of dental needs, including fixing of teeth overcrowding, therapies to ease a toothache, or alleviating jaw joint pain.</p>
                        <button className="bg-[#1B75BC] rounded-full text-white p-4 px-8 text-lg font-semibold uppercase cursor-pointer duration-200 hover:bg-[#15609a]">Choose Service</button>
                    </div>
                </div>
            </div>


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full lg:max-w-full">
                    {
                        allservices.map(service => <SingleCard key={service._id} service={service} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Services