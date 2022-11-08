import React from 'react'
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { img, name, description, rating, price, _id } = service;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded border border-red-200 p-4 shadow-sm">

            <PhotoProvider>
                <div className="foo">
                    <PhotoView src={img}>
                        <img src={img} className="w-full h-64 rounded cursor-pointer" style={{ objectFit: 'cover' }} alt="" />
                    </PhotoView>
                </div>
            </PhotoProvider>

            <div className="py-5">
                <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    <p className="text-2xl font-bold leading-5">{name}</p>
                </a>
                <p className="mb-4 text-gray-700">
                    {description.substr(0, 100)}
                </p>
                <div className="flex space-x-4">
                    <a
                        href="/"
                        aria-label="Likes"
                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                    >
                        <div className="mr-2">
                            <p className='font-semibold'>Rating:</p>
                        </div>
                        <p className="font-semibold">{rating}</p>
                    </a>
                    <a
                        href="/"
                        aria-label="Comments"
                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                    >
                        <div className="mr-2">
                            <p className='font-semibold'>Price: $</p>
                        </div>
                        <p className="font-semibold">{price}</p>
                    </a>
                </div>

            </div>
            <Link to={`/services/${_id}`}><button className='bg-[#f36259] p-2 px-6 w-full mt-6 text-white text-lg hover:bg-[#c14a42] '>View Details</button></Link>

        </div>
    )
}

export default Service