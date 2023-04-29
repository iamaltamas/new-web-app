import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './modules/App/pages/Login/Login'
import SignIn from './modules/App/pages/SignIn/SignIn'
import Dashboard from './modules/Dashboard/Dashboard'
 const App = () => {
  return (
    
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} />
           <Route  path="signIn" element={<SignIn />} />
           <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  
  )
}
export default App;