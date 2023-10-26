import { Navigate, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import AuthLayout from '../pages/auth/AuthLayout'
import Home from '../pages/home'
import Contact from '../pages/contact'
import { store } from './../stores/index';
import { setIsLogin } from '../stores/authSlice'
import Login from 'pages/auth/components/Login'

const router = createBrowserRouter([
    {
        path: '/',
        id: 'root',
        element: <MainLayout />,
        loader: () => {
            if(localStorage.getItem('token')) store.dispatch(setIsLogin(true))
            else store.dispatch(setIsLogin(false))
            return true
        },
        children: [
            {
                index: true,
                element: <Navigate to="home" />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        loader: () => {
            if(localStorage.getItem('token')) store.dispatch(setIsLogin(true))
            else store.dispatch(setIsLogin(false))
            return true
        },
        children: [
            {
                index: true,
                element: <Navigate to="login" />
            },
            {
                path: "login",
                element: <Login />
            },
        ]
    }
])

export default router