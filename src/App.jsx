import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Servicesitem from './pages/Servicesitem';
import Skill from './pages/Skill';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/about' element= {<About />}></Route>
        <Route path='/services' element= {<Servicesitem />}></Route>
        <Route path='/skill' element= {<Skill />}></Route>
        <Route path='/contact' element= {<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </> 
  )
}

export default App