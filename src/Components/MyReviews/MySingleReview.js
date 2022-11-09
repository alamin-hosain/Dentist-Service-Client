import React, { useEffect, useState } from 'react'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


const MySingleReview = ({ review, handleClick }) => {

    const { addedReview, name, photoURl, rating, serviceName, serviceId, _id, time, } = review;

    // const [allReview, setAllReview] = useState([]);

    // useEffect(() => {
    //     fetch('https://b6a11-service-review-server-side-alamin-hosain.vercel.app/allreviews')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.length)
    //             setAllReview(data)
    //         })
    // }, [])

    // console.log(allReview.length)

    return (



        <table className="table w-4/5 mx-auto my-20">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>rating</th>
                    <th>review</th>
                    <th>Added Time</th>
                    <th>Delete / Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div>
                                <div className="font-bold">{serviceName}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {rating}

                    </td>
                    <td>{addedReview}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs">{time}</button>
                    </th>
                    <th className='flex'>
                        <FaTrashAlt className='cursor-pointer' onClick={() => handleClick(_id, serviceName)} />
                        <Link to={`/updatereview/${_id}`} >
                            <FaEdit className='cursor-pointer ml-14' />
                        </Link>
                    </th>
                </tr >

            </tbody>


        </table>



    )
}

export default MySingleReview