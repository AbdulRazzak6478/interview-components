import React from 'react'
import Header from "./components/Header/Header"
import './App.css';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp/Signup';
import SignIn from './components/SignIn/SignIn';
const App = () => {
  return (
    <>
      <Router>
        <Header />  
        
        <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;