import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SingleReview from './SingleReview'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <div className="container px-4 mx-auto">
            <span className="text-xs text-gray-300 uppercase tracking-wide">What people say</span>
            <h1 className="mt-4 mb-6 text-5xl md:text-10xl xl:text-11xl font-heading font-medium leading-tight text-[#f36259]">Testimonials</h1>

            <Link className="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700" href="#">1,218 reviews</Link>

            {
                reviews.map(review => <SingleReview key={review._id} review={review} />)
            }


            <div className="text-center mt-20">
                <button className="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">See all</button>
            </div>
        </div>
    )
}

export default Testimonial