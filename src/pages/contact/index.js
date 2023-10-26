import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const handleLogout = _ => {
    localStorage.removeItem('token')
    navigate("/auth")
  }
    return (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Contact