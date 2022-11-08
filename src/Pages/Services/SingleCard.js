import React from 'react'
import { Link } from 'react-router-dom'

const SingleCard = ({ service }) => {
    const { img, name, price, rating, description, _id } = service
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded border  p-4 shadow-sm relative">

            <img
                src={img}
                className="object-cover w-full h-64 rounded"
                alt=""
            />

            <div className="py-5">
                <Link
                    to={`/detailsservice/${_id}`}
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    <p className="text-2xl font-bold leading-5">{name}</p>
                </Link>
                <p className="mb-4 text-gray-700">
                    {description.substr(0, 100)}
                </p>
                <div className="flex space-x-4 mb-6">
                    <p
                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                    >
                        <div className="mr-2">
                            <p className='font-semibold'>Rating:</p>
                        </div>
                        <p className="font-semibold">{rating}</p>
                    </p>
                    <p
                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                    >
                        <div className="mr-2">
                            <p className='font-semibold'>Price: $</p>
                        </div>
                        <p className="font-semibold">{price}</p>
                    </p>
                </div>
                <div className='absolute bottom-0 left-0 w-full'>
                    <Link to={`/detailsservice/${_id}`}><button className='bg-[#f36259] p-2 px-6 w-full mt-6 text-white text-lg hover:bg-[#c14a42] '>View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCard