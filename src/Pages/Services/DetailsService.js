import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData } from 'react-router-dom'
import BelowMenu from '../../Components/Shared/BelowMenu';
import Testimonial from './Testimonial/Testimonial';

const DetailsService = () => {
    const singleService = useLoaderData();
    const { img, name, price, rating, description } = singleService[0];

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const photoUrl = e.target.photo.value;
        const addedReview = e.target.review.value;
        const time = e.target.time.value;

        const newReview = {
            name,
            rating,
            photoUrl,
            addedReview,
            time
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Your Review Submitted Successfully');


                }

            })
        e.target.reset();
    }


    return (
        <div>
            <BelowMenu title={'Service Details'} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg border border-blue-500">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
                        src={img}
                        alt=""
                    />
                </div>
                <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                    <h3 className='bg-[#1B75BC] text-white p-2 mb-6 text-lg'>Rating by User: {rating}</h3>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        {name}
                    </h2>
                    <p className="mb-5 text-base text-gray-700 md:text-lg">
                        {description}
                    </p>
                    <div className="flex items-center md:justify-center">
                        <button
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded-full shadow-sm
                            bg-[#1B75BC] text-white text-2xl focus:shadow-outline focus:outline-none hover:bg-[#145485]"
                        >
                            Get In Touch
                        </button>
                        <p

                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Price: ${price}
                        </p>
                    </div>
                </div>
            </div>


            <section className="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">

                <form className='flex flex-col items-center w-3/4 mx-auto border p-8 mb-16' onSubmit={handleSubmitReview}>
                    <h2 className='text-2xl mb-6 font-semibold'>Add A Review</h2>

                    <input className='border p-2 px-4 w-1/2 rounded-lg mb-8' name='name' type="text" placeholder='Full Name' />

                    <input className='border p-2 px-4 w-1/2 rounded-lg mb-8' name='rating' type="text" placeholder='Type Your Rating Here Out of 5' />

                    <input className='border p-2 px-4 w-1/2 rounded-lg mb-8' name='photo' type="text" placeholder='Your Photo URL' />

                    <textarea className='border p-2 px-4 w-1/2 rounded-lg mb-8' name="review" placeholder='Type Your Review Here'></textarea>

                    <input className='border p-1 px-4' name='time' type="time" />

                    <input className='bg-[#f36259] p-2 px-8 rounded-md cursor-pointer text-white text-lg mt-8' type="submit" value='Submit' />
                </form>

                <Testimonial />
            </section>
        </div>
    )
}

export default DetailsService