import React from 'react'
import Project from '../Project/Project'
import './ProjectsList.css'

const ProjectsList = () => {
  return (
    <section className="ProjectsList" id="ProjectsList">
      <h2>Projects</h2>
      <div>
        <Project
          imgOneName={'projector-desktop.png'} //all images in '../../assets/images/'
          imgTwoName={'projector-mobile.png'}
          title={'Projector'}
          summary={
            "Projector is an app designed for you to track your project by it's funding."
          }
          credentials={{ username: 'user', password: 'password' }}
          tech={
            'A responsive app made using React.js, Express.js and PostgreSQL'
          }
          liveUrl={'https://projector.krill.now.sh/'}
          gitHub={'https://github.com/smallcrustation/projector-client'}
          githubApi={'https://github.com/smallcrustation/projector-server'}
        />
      </div>
    </section>
  )
}

export default ProjectsList
