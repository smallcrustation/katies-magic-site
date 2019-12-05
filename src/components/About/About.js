import React, { useContext, useEffect } from 'react'
import './About.css'
import { NavContext } from '../../contexts/NavContext'
import { ThemeContext } from '../../contexts/ThemeContext'


const About = () => {
  const { addSection } = useContext(NavContext)
  const {dayNight} = useContext(ThemeContext)

  useEffect(() => {
    addSection('About')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="About container" >
      <h2 className={dayNight?"":"night-h2"}>About</h2>
      <p>
        Four score and seven years ago*. Hello, I'm a full stack Javascript web
        developer using the PERN stack.
      </p>
      <p>
        Before diving into web dev with JS, I took a few computer science
        classes in college then dabbled more in coding.{' '}
      </p>
      <p>
        First with a small side scroller then web development with python/django
        and java/spring/springboot.
      </p>
    </section>
  )
}

export default About
