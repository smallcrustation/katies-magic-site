import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import ProjectsList from '../ProjectsList/ProjectsList'
import NavContextProvider from '../../contexts/NavContext'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ThemeContextProvider from '../../contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <NavContextProvider>
        <ThemeContextProvider>
          <Header />
          <Hero />
          <About />
          <Skills />
          <ProjectsList />
          <Contact />
          <Footer />
        </ThemeContextProvider>
      </NavContextProvider>
    </div>
  )
}

export default App
