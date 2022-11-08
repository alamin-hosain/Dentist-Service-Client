import React from 'react'
import BelowMenu from '../../Components/Shared/BelowMenu'
import { FaPhoneSquare, FaMailBulk } from "react-icons/fa";
import { pageTitle } from '../../utils/PageTitle';

const Contact = () => {
    pageTitle('Contact - Contact With Us');
    return (
        <>
            <BelowMenu title={'Contact'} />
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">

                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative inline-block text-deep-purple-accent-400">
                                        About Mr John Doe Dentist
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                I have a genuine care for the well-being of every patient who walks through the doors of Nuffield Dental. I believe maintaining good oral hygiene is vital to your health and happiness—the state of your teeth, gums, and jaws can directly affect how you feel on a daily basis. And I want you feeling great, always.
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        My Contac Info
                                    </h6>
                                    <p className="text-sm text-gray-900 flex items-center">
                                        <FaPhoneSquare className='mr-3'></FaPhoneSquare>+8801723987898
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Email for Enquery:
                                    </h6>
                                    <p className="text-sm text-gray-900 flex items-center">
                                        <FaMailBulk className='mr-3'></FaMailBulk>john.doe@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact