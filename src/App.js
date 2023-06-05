import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './modules/App/pages/Login/Login'
import SignIn from './modules/App/pages/SignIn/SignIn'
import Dashboard from './modules/Dashboard/Dashboard'
import Home from './modules/App/pages/Home/Home'
import Features from './modules/App/pages/Features/Features'
import Pricing from './modules/App/pages/Pricing/Pricing'
import Disabled from './modules/App/pages/Disabled/Disabled'
import Navbar from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header/Header'
const App = () => {
  return (

    <div>
      <Provider store={store}>
        <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/disabled" element={<Disabled />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>

  )
}
export default App;