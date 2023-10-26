import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import AuthService from 'services/AuthService'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsLogin } from 'stores/authSlice'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async _ => {
        try {
            const res = await AuthService.login({
                "username": "dev27",
                "password": "zaq1!QAZ",
                "domain": null,
                "captcha": ""
            })

            if(res.status === 200) {
                localStorage.setItem('token', 'token')
                dispatch(setIsLogin(true))
                navigate("/")
            } 
        } catch (err) {
            console.log("err", err)
            dispatch(setIsLogin(false))
        }
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Material UI Create React App example
                </Typography>
                <Button variant='contained' onClick={handleLogin}>Login</Button>
            </Box>
        </Container>
    )
}

export default Login