import React from 'react'
import Service from './Service'

const SingleService = ({ threeService }) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    threeService.map(service => <Service key={service._id} service={service} />)
                }
            </div>
            <div className='flex justify-center mt-24 '>
                <button className='bg-[#1B75BC] rounded-full text-white p-4 px-8 text-lg font-semibold uppercase cursor-pointer duration-200 hover:bg-[#15609a]'>Browse All Services</button>
            </div>
        </div>
    )
}

export default SingleService