
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Offers from './Pages/Offers'
import Signup from './Pages/Signup'
import SignIn from './Pages/SignIn'
import ForgotPassword from './Pages/ForgotPassword'


import './App.css'
import { Profiler } from 'react'
import Header from './components/Header'

function App() {

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
     </Router>
      
    </>
  )
}

export default App
