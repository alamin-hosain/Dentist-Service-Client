import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/AuthProvider';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOUt } = useContext(AuthContext);

    const handleSignOut = () => {
        logOUt()
            .then(() => {
                toast.success('Log Out Successful')

            })
            .catch(e => console.error(e));
    }
    return (
        <>
            <div className='hidden lg:flex justify-center items-center pt-16 pb-6'>
                <NavLink to="/">
                    <img className='w-72' src={logo} alt="" />
                </NavLink>
            </div>

            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-end lg:justify-center z-50">
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                to="/"
                                className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/team"
                                className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                            >
                                Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/profile"
                                className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                            >
                                Profile
                            </NavLink>
                        </li>
                        {
                            user ?
                                <li onClick={handleSignOut}>
                                    <Link
                                        to="/register"
                                        className="font-semibold tracking-wide duration-200 uppercase bg-[#f36259] rounded-full p-1 px-4 text-white hover:bg-[#a62f27]"
                                    >
                                        Sign Out
                                    </Link>
                                </li>

                                :
                                <>

                                    <li>
                                        <Link
                                            to="/register"
                                            className="font-semibold tracking-wide duration-200 uppercase bg-[#f36259] rounded-full p-1 px-4 text-white hover:bg-[#a62f27]"
                                        >
                                            Sign Up
                                        </Link>
                                    </li>


                                    <li>
                                        <Link
                                            to="/login"
                                            className="font-semibold tracking-wide duration-200 uppercase bg-[#f36259] rounded-full p-1 px-4 text-white hover:bg-[#a62f27]"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>

                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 "
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600 " viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink href="">
                                                <img className='w-72' src={logo} alt="" />
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/"
                                                    className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/team"
                                                    className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                                                >
                                                    Team
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/contact"
                                                    className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                                                >
                                                    Contact
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/services"
                                                    className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                                                >
                                                    Services
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/profile"
                                                    className="font-semibold tracking-wide text-gray-900  duration-200 uppercase hover:bg-[#f36259] hover:rounded-full hover:p-1 hover:px-4 hover:text-white"
                                                >
                                                    Profile
                                                </NavLink>
                                            </li>
                                            {
                                                user ?
                                                    <li onClick={handleSignOut}>
                                                        <Link
                                                            to="/register"
                                                            className="font-semibold tracking-wide duration-200 uppercase bg-[#f36259] rounded-full p-1 px-4 text-white hover:bg-[#a62f27]"
                                                        >
                                                            Sign Out
                                                        </Link>
                                                    </li>

                                                    :
                                                    <>

                                                        <li>
                                                            <Link
                                                                to="/register"
                                                                className="font-semibold tracking-wide duration-200 uppercase bg-[#f36259] rounded-full p-1 px-4 text-white hover:bg-[#a62f27]"
                                                            >
                                                                Sign Up
                                                            </Link>
                                                        </li>


                                                        <li>
                                                            <Link
                                                                to="/login"
                                                                className="font-semibold tracking-wide duration-200 uppercase bg-[#f36259] rounded-full p-1 px-4 text-white hover:bg-[#a62f27]"
                                                            >
                                                                Login
                                                            </Link>
                                                        </li>
                                                    </>
                                            }

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar