import React, { useContext, useEffect } from "react";
import { NavContext } from "../../contexts/NavContext";
import Project from "../Project/Project";
import "./ProjectsList.css";
import { ThemeContext } from "../../contexts/ThemeContext";


const ProjectsList = () => {
  const { addSection } = useContext(NavContext);
  const {dayNight} = useContext(ThemeContext)


  useEffect(() => {
    addSection("ProjectsList");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="ProjectsList container">
      <h2 className={dayNight?"":"night-h2"}>Projects</h2>
      <div>
        <Project
          imgOneName={"projector-desktop.png"} //all images in '../../assets/images/'
          imgTwoName={"projector-mobile.png"}
          title={"Projector"}
          summary={
            "Projector is an app designed for you to track your project by it's funding."
          }
          credentials={{ username: "user", password: "password" }}
          tech={
            "A responsive app made using React.js, Express.js and PostgreSQL"
          }
          liveUrl={"https://projector.krill.now.sh/"}
          gitHub={"https://github.com/smallcrustation/projector-client"}
          githubApi={"https://github.com/smallcrustation/projector-server"}
        />
        <Project
          imgOneName={"bestq.png"} //all images in '../../assets/images/'
          // imgTwoName={""}
          title={"Best Quiz!"}
          summary={
            "An app that ask exceedingly difficult math question and keeps score before allowing you to restart."
          }
          // credentials={{ username: "user", password: "password" }}
          tech={"Responsive app made using html, css, javascript and jQuery"}
          liveUrl={
            "https://thinkful-ei-firefly.github.io/quizz-app-ahmed-cody/"
          }
          gitHub={"https://github.com/thinkful-ei-firefly/quizz-app-ahmed-cody"}
          rowRev={true}
        />
        <Project
          imgOneName={"spaced-repetition.png"} //all images in '../../assets/images/'
          imgTwoName={""}
          title={"Spaced-Repetition"}
          summary={
            "Practice learning a language with the spaced repetition revision technique."
          }
          credentials={{ username: "user", password: "Password1!" }}
          tech={"Responsive app made using React.js, Express.js and PostgreSQL"}
          liveUrl={"https://spaced-repetition.krill.now.sh/register"}
          gitHub={"https://github.com/Hmvalles75/spaced-repetition"}
          githubApi={
            "https://github.com/thinkful-ei-firefly/spaced-repetition-api-hector-cody"
          }
        />
        <Project
          imgOneName={"whatdo-desktop.png"} //all images in '../../assets/images/'
          imgTwoName={"whatdo-mobile.png"}
          title={""}
          summary={
            "Find event's near you with weather using zip, current location & save events you're interested in"
          }
          credentials={{ username: "user", password: "Password1!" }}
          tech={"Responsive app made using React.js, Express.js and PostgreSQL"}
          liveUrl={"https://whatdo.now.sh/"}
          gitHub={"https://github.com/thinkful-ei-firefly/whatdo-client"}
          githubApi={"https://github.com/thinkful-ei-firefly/whatdo-server"}
          rowRev={true}
        />
      </div>
    </section>
  );
};

export default ProjectsList;
