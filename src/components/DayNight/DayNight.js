import React, { useContext } from 'react'
import './DayNight.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { NavContext } from '../../contexts/NavContext'

const DayNight = () => {
  const { dayNight, toggleDayNight } = useContext(ThemeContext)
  const {expanded} = useContext(NavContext)

  const handleDayNightClick = () => {
    toggleDayNight()
  }

  return (
    <div className={`DayNight ${expanded?'DayNight-slide':''}`} onClick={handleDayNightClick}>
      <div
        className={`DayNight-moon ${dayNight ? '' : 'DayNight-moon-active'}`}
      ></div>
    </div>
  )
}

export default DayNight
