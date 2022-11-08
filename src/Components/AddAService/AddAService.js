import React, { useContext } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const AddAService = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)

    const handleSubmitReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const img = e.target.photo.value;
        const description = e.target.description.value;
        const price = e.target.price.value

        const newService = {
            name,
            rating,
            img,
            description,
            price,
            email: user.email
        }
        fetch('http://localhost:5000/services/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added Successfully');
                }
            })
        e.target.reset();
    }

    return (
        <form className='flex flex-col items-center w-full md:w-3/4 mx-auto border p-8  mt-20 mb-20' onSubmit={handleSubmitReview}>
            <h2 className='text-2xl mb-6 font-semibold'>Add A Service</h2>

            <input className='border p-2 px-4 w-full md:w-1/2 rounded-lg mb-8' name='name' type="text" placeholder='Type Service Name' />

            <input className='border p-2 px-4  w-full md:w-1/2 rounded-lg mb-8' name='rating' type="text" placeholder='Service Rating' />
            <input className='border p-2 px-4  w-full md:w-1/2 rounded-lg mb-8' name='price' type="text" placeholder='Type Service Price' />

            <input className='border p-2 px-4  w-full md:w-1/2 rounded-lg mb-8' name='photo' type="text" placeholder='Your Photo URL' />

            <textarea className='border p-2 px-4  w-full md:w-1/2 rounded-lg mb-8' name="description" placeholder='Service Details Here'></textarea>

            <input className='bg-[#f36259] p-2 px-8 rounded-md cursor-pointer text-white text-lg mt-8' type="submit" value='Submit' />
        </form>
    )
}

export default AddAService