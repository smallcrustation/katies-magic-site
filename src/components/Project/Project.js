import React, { useEffect, useState, useRef } from 'react'
import './Project.css'
import Waves from '../../assets/svgs/waves'

const Project = ({
  imgOneName,
  imgTwoName,
  title,
  summary,
  tech,
  liveUrl,
  gitHub,
  githubApi,
  credentials
}) => {
  const [scrollPos, setScrollPos] = useState(window.pageYOffset)

  const projectRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // const options = {
    //   root: projectRef.current,
    //   rootMargin: '0px',
    //   threshold: 1
    // }
    // const observer = new IntersectionObserver(handleScroll, options)
    // console.log('clientHeight:', projectRef.current.clientHeight)
    // console.log('offsetTop:', projectRef.current.offsetTop)
  }, [])

  const handleScroll = () => {
    const bottomWindowYOffset = window.pageYOffset + window.innerHeight
    // if projectRef is in the viewport & top of viewport is not past top of projectRef
    if (
      bottomWindowYOffset > projectRef.current.offsetTop &&
      window.pageYOffset < projectRef.current.offsetTop
    ) {
      let pos =
        projectRef.current.clientHeight +
        projectRef.current.offsetTop -
        bottomWindowYOffset
      setScrollPos(pos / 20)
    }
  }

  const openSite = url => {
    window.open(url)
  }

  return (
    <article className="Project">
      <div
        className="Project-imgs fadeInUp"
        // onClick={() => openSite(liveUrl)}
        ref={projectRef}
      >
        <div>
          <img
            onClick={() => openSite(liveUrl)}
            className="Project-img1"
            style={{ transform: `translateY(${-scrollPos / 2}%)` }}
            src={require(`../../assets/images/${imgOneName}`)}
            alt={title}
          />
          {imgTwoName ? (
            <img
              onClick={() => openSite(liveUrl)}
              className="Project-img2"
              style={{ transform: `translateY(${-scrollPos / 3}%)` }}
              src={require(`../../assets/images/${imgTwoName}`)}
              alt={title}
            />
          ) : (
            ''
          )}
        </div>
        <div
          className="Project-bg circle-ish"
          style={{
            transform: `rotate(${scrollPos / 5}deg) translateY(${scrollPos /
              5}%)`
            // transform: `translateY(${scrollPos / 3}%)`
          }}
        >
          <Waves fillColor="black" />
        </div>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      {credentials ? (
        <div>
          Username: {credentials.username} <br /> Password:{' '}
          {credentials.password}
        </div>
      ) : (
        ''
      )}
      <p>{tech}</p>
      <div className="Project-links">
        <a
          className="a-btn"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Site
        </a>
        <a
          className="a-btn"
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
        {githubApi ? (
          <a
            className="a-btn"
            href={githubApi}
            target="_blank"
            rel="noopener noreferrer"
          >
            Api Repo
          </a>
        ) : (
          ''
        )}
      </div>
    </article>
  )
}

export default Project
