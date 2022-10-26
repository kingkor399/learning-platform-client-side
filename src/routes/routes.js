import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import Courses from "../Component/Courses/Courses";
import Faq from "../Component/Faq/Faq";
import Login from "../Component/Login/Login";
import Main from "../Component/Main/Main";
import Register from "../Component/Register/Register";

export const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>,
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
        }
    ]
    }
])