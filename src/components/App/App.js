import React, {useContext} from 'react'
import './App.css'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import ProjectsList from '../ProjectsList/ProjectsList'
import NavContextProvider from '../../contexts/NavContext'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../../contexts/ThemeContext'

function App() {
  const {dayNight} = useContext(ThemeContext)
  
  return (
    <div className={`App ${dayNight?'':'App-night'}`}>
      <NavContextProvider>
          <Header />
          <Hero />
          <About />
          <Skills />
          <ProjectsList />
          <Contact />
          <Footer />
      </NavContextProvider>
    </div>
  )
}

export default App
