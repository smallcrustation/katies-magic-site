import React, { useContext } from 'react'
import './Skills.css'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function Skills() {
  const { dayNight } = useContext(ThemeContext)

  return (
    <section className="Skills container">
      <h2 className={dayNight ? '' : 'night-h2'}>Skills</h2>
      <p>
        Javascript, GIT, HTML, CSS, Postgres, Express, React, and Node + some
        Java/Spring & Python/django
      </p>
    </section>
  )
}
