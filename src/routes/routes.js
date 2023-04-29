import React from 'react'
import {Route, Routes,Redirect} from 'react-router-dom'
import Login from '../modules/App/pages/Login/Login'
import SignIn from '../modules/App/pages/SignIn/SignIn'
import Dashboard from '../modules/Dashboard/Dashboard'
const Rout = () => {
  return (
    
        <Routes>
           <Route path="/" element={<Login />} />
           <Route  path="signIn" element={<SignIn />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Redirect to="signIn"/>
        </Routes>
  
  )
}

export default Rout