import React, { useContext } from 'react'
import './DayNight.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import CactSvg from '../../assets/svgs/CactSvg'

const DayNight = () => {
  const { dayNight, toggleDayNight } = useContext(ThemeContext)

  const handleDayNightClick = () => {
    toggleDayNight()
  }

  return (
    <div className="DayNight" onClick={handleDayNightClick}>
      <div className={`DayNight-day ${dayNight ? '' : 'DayNight-night'}`}></div>
      <div
        className={`DayNight-moon ${dayNight ? '' : 'DayNight-moon-active'}`}
      ></div>
      <CactSvg flowerColor={dayNight?"#ef0519":"#70040d"} cactusColor={dayNight?"#75ba2c":'#446d19'}/>
    </div>
  )
}

export default DayNight
