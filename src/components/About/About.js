import React, { useContext, useEffect } from 'react'
import './About.css'
import { NavContext } from '../../contexts/NavContext'
import { ThemeContext } from '../../contexts/ThemeContext'

const About = () => {
  const { addSection } = useContext(NavContext)
  const { dayNight } = useContext(ThemeContext)

  useEffect(() => {
    addSection('About')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="About container">
      <h2 className={dayNight ? '' : 'night-h2'}>About</h2>
      <p>
        Katie go swooosh splash. We make fun party yay.
      </p>
      {/* <p>
        Growing up I had an affinity for computers that was sparked with video
        games(astonishing!). This lead me to find creative ways of getting
        things to work...
      </p>
      <p>
        Like when my parents turned off the internet and I 'borrowed' a
        neighbors WEP key with a netbook, linux, Aircrack-ng and a longggg
        ethernet cable through my window up to the roof where I was working on
        solving my 'Network Issues'.
      </p> */}
      <p>
      <ul>
        <li>-Paint</li>
        <li>-Mermaid</li>
        <li>-MAGIC RABBIT</li>
        <li>-Very Cute</li>
      </ul>
      </p>
      <p>
        It's going to be RAD!
      </p>
    </section>
  )
}

export default About
