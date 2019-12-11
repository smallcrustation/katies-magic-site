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
        Four score and seven years ago*. Hello, I'm a full stack Javascript web
        developer using the PERN stack.
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
        Before diving into web dev with JS, I took a few computer science
        classes in college that piqued my interest further into coding{' '}
      </p>
      <p>
        First with a small side scroller then web development with python/django
        and java/spring/springboot.
      </p>
    </section>
  )
}

export default About
