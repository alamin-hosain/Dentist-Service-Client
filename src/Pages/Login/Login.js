import React, { useContext } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../contexts/AuthProvider'

const Login = () => {
    const { signInWithGoogle, signInWithGithub, handleSignIn, loading } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignIn(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Login Successfully')
                console.log(user);
                navigate(from, { replace: true });
                e.target.reset();
            })
            .catch(e => console.error(e))
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-200">
            {loading &&
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin mx-auto dark:border-green-700"></div>
            }
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login Here
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleFormSubmit}>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            <button type="submit" className="w-full text-white bg-[#f36259] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 hover:bg-[#ae3e37] dark:focus:ring-primary-800">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                            </p>
                        </form>
                        <div className='text-white flex justify-around'>
                            <button onClick={handleGoogleSignIn} className='border p-2 px-2 rounded-lg flex items-center hover:bg-[#f36259]'><FaGoogle /><p className='ml-2'>Google Sign In</p></button>
                            <button onClick={handleGithubSignIn} className='border p-1 px-2 flex items-center rounded-lg hover:bg-[#f36259]'><FaGithub /><p className='ml-2'> Github Sign In</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login