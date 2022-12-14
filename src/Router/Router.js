import { createBrowserRouter } from "react-router-dom";
import AddAService from "../Components/AddAService/AddAService";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import MyReviews from "../Components/MyReviews/MyReviews";
import UpdateReview from "../Components/MyReviews/UpdateReview";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import DetailsService from "../Pages/Services/DetailsService";
import Services from "../Pages/Services/Services";
import Team from "../Pages/Team/Team";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorElement />, children: [
            {
                path: '/', element: <Home />,
                loader: () => fetch('https://b6a11-service-review-server-side-alamin-hosain.vercel.app/services'),
            },
            { path: '/blog', element: <Blog /> },
            { path: '/team', element: <Team /> },
            { path: '/contact', element: <Contact /> },
            { path: '/services', element: <Services /> },
            { path: '/profile', element: <Profile /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            {
                path: '/services/:id', element: <DetailsService />,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-alamin-hosain.vercel.app/services/${params.id}`),
            },
            {
                path: '/addservice', element: <PrivateRoute>
                    <AddAService />
                </PrivateRoute>
            },
            {
                path: '/myreviews', element: <PrivateRoute>
                    <MyReviews />,
                </PrivateRoute>,
            },
            {
                path: '/updatereview/:id', element: <PrivateRoute>
                    <UpdateReview />,

                </PrivateRoute>
                ,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-alamin-hosain.vercel.app/updatereview/${params.id}`)
            }
        ]
    }
])

export default router;