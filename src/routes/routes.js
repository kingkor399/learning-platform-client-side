import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import CourseDetails from "../Component/CourseDetails";
import Courses from "../Component/Courses/Courses";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Faq from "../Component/Faq/Faq";
import Login from "../Component/Login/Login";
import Main from "../Component/Main/Main";
import Register from "../Component/Register/Register";
import CourseCategory from "../CourseCategory/CourseCategory";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {path: '/',
        element: <Courses></Courses>
        },
        {path: '/courses',
        element: <Courses></Courses>
        },
        {path: '/faq',
        element: <Faq></Faq>
        },
        {path: '/blog',
        element: <Blog></Blog>
        },
        {path: '/login',
        element: <Login></Login>
        },
        {path: '/register',
        element: <Register></Register>
        },
        {path: '/category/:id',
        element: <CourseCategory></CourseCategory>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {path: '/courses/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
        }
    ]
    }
])