import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="Contact">
      <h2>Contact</h2>
      <div className="container">
        <div>
          <a className="a-btn" href="mailto:lpmaze@gmail.com?subject=Portfolio%20Mail!" target="_blank" rel="noopener noreferrer">
          <img src={require('../../assets/icons/email.svg')} alt="Email Logo" />
          lpmaze@gmail.com
          </a>
        </div>
        <div>
          <a className="a-btn" href="https://github.com/smallcrustation" target="_blank" rel="noopener noreferrer">
            <img
              src={require('../../assets/icons/GitHub.svg')}
              alt="GitHub Logo"
            />
            GitHub
          </a>
        </div>
        <div>
          <a
            className="a-btn"
            href="https://www.linkedin.com/in/cody-oberholtzer-6b4256159/"
            target="_blank" rel="noopener noreferrer"
          >
            <img
              src={require('../../assets/icons/LinkedIn.png')}
              alt="LinkedIn Logo"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
