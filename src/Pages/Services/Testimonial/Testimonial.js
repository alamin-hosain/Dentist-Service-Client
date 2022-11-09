import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider'
import SingleReview from './SingleReview'

const Testimonial = ({ singleService }) => {
    const [refresh, setRefresh] = useState(false)
    const { _id } = singleService[0];
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-alamin-hosain.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setRefresh(!refresh)
            })
    }, [refresh])



    return (
        <div className="container px-4 mx-auto">
            <span className="text-xs text-gray-300 uppercase tracking-wide">What people say</span>
            <h1 className="mt-4 mb-6 text-5xl md:text-10xl xl:text-11xl font-heading font-medium leading-tight text-[#f36259]">Testimonials</h1>

            {
                reviews.map(review => <SingleReview key={review._id} review={review} />)
            }

        </div>
    )
}

export default Testimonial