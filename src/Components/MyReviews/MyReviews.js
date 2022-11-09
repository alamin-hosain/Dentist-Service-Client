import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider'
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    const { user, logOUt } = useContext(AuthContext);
    const [userReview, setUserReview] = useState([]);

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-alamin-hosain.vercel.app/userreview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOUt()
                }
                return res.json();
            })
            .then(data => {
                setUserReview(data)
            })
    }, [user?.email])


    const handleClick = (id, serviceName) => {
        const agree = window.confirm(`Are Your Sure? You Want to Delete ${serviceName}`)
        if (agree) {
            fetch(`https://b6a11-service-review-server-side-alamin-hosain.vercel.app/userreview/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('User deleted Successfully')
                        const remainingReviews = userReview.filter(usr => usr._id !== id)
                        setUserReview(remainingReviews)
                    }
                })
        }

    }

    return (
        <div className="overflow-x-auto w-full">
            {
                userReview.length > 0 ?

                    userReview.map(review => <MySingleReview key={review._id} review={review} handleClick={handleClick} />)

                    :
                    <div className='flex justify-center items-center py-52'>
                        <h2 className='text-3xl font-extrabold text-[#1B75BC]'>No Reviews Added Yet
                        </h2>
                    </div>
            }

        </div>
    )
}

export default MyReviews