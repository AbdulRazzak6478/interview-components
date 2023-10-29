import React from 'react'
import Header from "./components/Header/Header"
import './App.css';
import Banner from './components/Banner/Banner';
const App = () => {
  return (
    <div className='app'>
      <Header />  
      <Banner />
    </div>
  )
}

export default App;