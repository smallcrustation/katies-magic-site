import React, { useContext } from 'react'
import './DayNight.css'
import { ThemeContext } from '../../contexts/ThemeContext'

const DayNight = () => {
  const { dayNight, toggleDayNight } = useContext(ThemeContext)

  const handleDayNightClick = () => {
    toggleDayNight()
  }

  return (
    <div className="DayNight" onClick={handleDayNightClick}>
      <div className={`DayNight ${dayNight ? '' : 'DayNight-night'}`}></div>
      <div
        className={`DayNight-moon ${dayNight ? '' : 'DayNight-moon-active'}`}
      ></div>
    </div>
  )
}

export default DayNight
