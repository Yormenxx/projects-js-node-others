import React, { useState, createContext }from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from "./components/Contact"
import Footer from "./components/Footer";
export const ThemeContext = createContext('light');

const App = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (

    <ThemeContext.Provider value={{   
      theme, toggleTheme }}>
          <div className={`app ${theme}`}>
          
            <Navbar/>
            <Hero/>
            <Services/>
            <Portfolio/>
            <About/>
            <Reviews/>
            <Contact/>
            <Footer/>
          </div>
    </ThemeContext.Provider>
  )
}

export default App
