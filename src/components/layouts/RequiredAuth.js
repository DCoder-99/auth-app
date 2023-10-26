import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RequiredAuth = () => {
    const { isLogin } = useSelector(state => state.auth)
    return (
        <React.Fragment>
            {
                isLogin ? <Outlet /> : <Navigate to="/auth" />
            }
        </React.Fragment>
    )
}

export default RequiredAuth