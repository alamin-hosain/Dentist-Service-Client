import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import BelowMenu from '../../Components/Shared/BelowMenu';

const DetailsService = () => {
    const singleService = useLoaderData();
    const { img, name, price, rating, description } = singleService[0];
    const [reviews, setReviews] = useState({})

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const photoUrl = e.target.photo.value;
        const addedReview = e.target.review.value;
        const time = e.target.time.value;

        const newReview = {
            ...reviews,
            name,
            rating,
            photoUrl,
            addedReview,
            time
        }


        setReviews(newReview)
        e.target.reset();
    }

    console.log(reviews)

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

                <div className="container px-4 mx-auto">
                    <span className="text-xs text-gray-300 uppercase tracking-wide">What people say</span>
                    <h1 className="mt-4 mb-6 text-5xl md:text-10xl xl:text-11xl font-heading font-medium leading-tight text-[#f36259]">Testimonials</h1>

                    <Link className="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700" href="#">1,218 reviews</Link>
                    <div className="mb-2 shadow-md border rounded-t-8xl rounded-b-5xl overflow-hidden">
                        <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                            <div className="flex flex-col items-center">
                                <img className=" w-24 rounded-full shadow-md mt-6 mb-4" src="https://i.pinimg.com/236x/7b/e2/db/7be2dbac345f7c212f295b4464ef91af.jpg" alt="" />
                                <div className='flex flex-col justify-center items-center'>
                                    <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                                    <div className='flex justify-center items-center mt-6 bg-yellow-300 px-6'>
                                        <p>Your Rating</p>
                                        <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-900"></div>
                                        <span className="mr-4 text-xl font-heading font-medium">5 Out of 5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                    <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim mauris.</p>
                                </div>
                                <div className="w-full md:w-1/3 text-right">
                                    <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-20">
                        <button className="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">See all</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailsService