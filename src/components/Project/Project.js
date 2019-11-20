import React from 'react'
import './Project.css'

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
  const openSite = url => {
    window.open(url)
  }

  return (
    <article className="Project">
      <div className="Project-images" onClick={() => openSite(liveUrl)}>
        <img src={require(`../../assets/images/${imgOneName}`)} alt={title} />
        {imgTwoName ? (
          <img src={require(`../../assets/images/${imgTwoName}`)} alt={title} />
        ) : (
          ''
        )}
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      {credentials ? (
        <section>
          Username: {credentials.username} <br /> Password:{' '}
          {credentials.password}
        </section>
      ) : (
        ''
      )}
      <p>{tech}</p>
      <button onClick={() => openSite(liveUrl)}>View Site</button>
      <button onClick={() => openSite(gitHub)}>Repo</button>
      {githubApi ? <button>Repo api</button> : ''}
    </article>
  )
}

export default Project
