import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
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

const router = createBrowserRouter([
    {
        path: '/', element: <Main />, errorElement: <ErrorElement />, children: [
            {
                path: '/', element: <Home />,
                loader: () => fetch('http://localhost:5000/services'),
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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
        ]
    }
])

export default router;