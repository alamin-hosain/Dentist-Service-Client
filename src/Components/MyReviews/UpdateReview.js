import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const { name, rating, addedReview } = storedReview;

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const photoUrl = e.target.photo.value;
        const addedReview = e.target.review.value;
        const time = e.target.time.value;

        const updatedReview = {
            name,
            rating,
            photoUrl,
            addedReview,
            time,
        }

        fetch(`http://localhost:5000/updatereview/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('Successfully Update')

            })
    }


    return (
        <div>
            <form className='flex flex-col items-center w-3/4 mx-auto border p-8 mb-16 mt-20' onSubmit={handleUpdateReview}>
                <h2 className='text-2xl mb-6 font-semibold'>Update A Review</h2>

                <input className='border p-2 px-4 w-1/2 rounded-lg mb-8' name='name' type="text" placeholder='Full Name' defaultValue={name} required />

                <input className='border p-2 px-4 w-1/2 rounded-lg mb-8' name='rating' type="text" placeholder='Type Your Rating Here Out of 5' required />

                <input className='border p-2 px-4 w-1/2 rounded-lg mb-8' name='photo' type="text" placeholder='Your Photo URL' />

                <textarea className='border p-2 px-4 w-1/2 rounded-lg mb-8' name="review" placeholder='Type Your Review Here' required defaultValue={addedReview} ></textarea>

                <input className='border p-1 px-4' name='time' type="time" required />

                <input className='bg-[#f36259] p-2 px-8 rounded-md cursor-pointer text-white text-lg mt-8' type="submit" value='Submit' />
            </form>
        </div>
    )
}

export default UpdateReview