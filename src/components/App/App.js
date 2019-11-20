import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import ProjectsList from '../ProjectsList/ProjectsList'
import NavContextProvider from '../../contexts/NavContext'

function App() {
  return (
    <div className="App">
      <NavContextProvider>
        <Header />
      </NavContextProvider>
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
    </div>
  )
}

export default App
