import React, { useEffect, useState, useRef, useContext } from "react";
import "./Project.css";
// import WavesSvg from "../../assets/svgs/WavesSvg";
import { ThemeContext } from "../../contexts/ThemeContext";
import WavesSvg from "../../assets/svgs/WavesSvg";

const Project = ({
  imgOneName,
  imgTwoName,
  title,
  summary,
  tech,
  liveUrl,
  gitHub,
  githubApi,
  credentials,
  rowRev
}) => {
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  const {dayNight} = useContext(ThemeContext)

  const slowBgYTrans = 5;
  const slowBgRotate = 5;
  const slowImgYTrans = 2;

  const projectRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // const options = {
    //   root: projectRef.current,
    //   rootMargin: '0px',
    //   threshold: 1
    // }
    // const observer = new IntersectionObserver(handleScroll, options)
    // console.log('clientHeight:', projectRef.current.clientHeight)
    // console.log('offsetTop:', projectRef.current.offsetTop)
  }, []);

  const handleScroll = () => {
    const bottomWindowYOffset = window.pageYOffset + window.innerHeight;
    // if projectRef is in the viewport & top of viewport is not past top of projectRef
    if (
      bottomWindowYOffset > projectRef.current.offsetTop &&
      window.pageYOffset < projectRef.current.offsetTop
    ) {
      let pos =
        projectRef.current.clientHeight +
        projectRef.current.offsetTop -
        bottomWindowYOffset;
      setScrollPos(pos / 20);
    }
  };

  const openSite = url => {
    window.open(url);
  };

  return (
    <article className="Project" style={rowRev?{flexDirection: 'row-reverse'}:null}>
      <div
        className="Project-imgs fadeInUp"
        // onClick={() => openSite(liveUrl)}
        ref={projectRef}
      >
        <div>
          <img
            onClick={() => openSite(liveUrl)}
            className="Project-img1"
            style={{ transform: `translateY(${-scrollPos / slowImgYTrans}%)` }}
            src={require(`../../assets/images/${imgOneName}`)}
            alt={title}
          />
          {imgTwoName ? (
            <img
              onClick={() => openSite(liveUrl)}
              className="Project-img2"
              style={{
                transform: `translateY(${-scrollPos / slowImgYTrans + 1}%)`
              }}
              src={require(`../../assets/images/${imgTwoName}`)}
              alt={title}
            />
          ) : (
            ""
          )}
        </div>
        <div
          className="Project-bg circle-ish"
          style={{
            transform: `rotate(${scrollPos /
              slowBgRotate}deg) translateY(${scrollPos / slowBgYTrans}%)`
            // transform: `translateY(${scrollPos / 3}%)`
          }}
        >
            {/* red ef0519 */}
            {/* green 75ba2c */}
            {/* yellow f9d71c */}
          <WavesSvg fillColor="black" bgColor={dayNight?"white":"steelblue"}/>
        </div>
      </div>
      <div className="Project-summary">
        <h3>{title}</h3>
        <p>{summary}</p>
        {credentials ? (
          <div className="Project-credentials">
            Username: {credentials.username} <br /> Password:{" "}
            {credentials.password}
          </div>
        ) : (
          ""
        )}
        <p>{tech}</p>
        <div className="Project-links">
          <a
            className={`a-btn ${dayNight?"":"a-btn-dark"}`}
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </a>
          <a
            className={`a-btn ${dayNight?"":"a-btn-dark"}`}
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          {githubApi ? (
            <a
              className={`a-btn ${dayNight?"":"a-btn-dark"}`}
              href={githubApi}
              target="_blank"
              rel="noopener noreferrer"
            >
              Api Repo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
