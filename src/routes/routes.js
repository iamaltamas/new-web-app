import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../modules/App/pages/Login/Login'
import SignIn from '../modules/App/pages/SignIn/SignIn'
import Dashboard from '../modules/Dashboard/Dashboard'
const Rout = () => {
  return (
    
        <Routes>
           <Route path="/" element={<Login />} />
           <Route  path="sigin" element={<SignIn />} />
           <Route path="dashbord" element={<Dashboard />} />
        </Routes>
  
  )
}

export default Rout