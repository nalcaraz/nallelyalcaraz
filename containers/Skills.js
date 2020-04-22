import React, { Fragment } from "react";
import Panel from "../components/Panel";
import ListGroup from "react-bootstrap/ListGroup";
import {
  AngularIcon,
  JavaScriptIcon,
  ReactIcon,
  CSharpIcon,
  HtmlIcon,
  CssIcon,
  BootstrapIcon,
  JQueryIcon,
  VisualStudioIcon,
  GitIcon
} from "../assets/icons";

const skills = [
  {
    skill: "JavaScript",
    icon: <JavaScriptIcon></JavaScriptIcon>,
    
  },
  {
    skill: "ReactJS",
    icon: <ReactIcon></ReactIcon>
  },
  {
    skill: "Angular.js",
    icon: <AngularIcon></AngularIcon>
  },
  {
      skill: "jQuery",
      icon: <JQueryIcon></JQueryIcon>
  },
  {
    skill: "ASP.Net MVC"
  },
  {
    skill: "C#",
    icon: <CSharpIcon></CSharpIcon>
  },
  {
    skill: "HTML",
    icon: <HtmlIcon></HtmlIcon>
  },
  {
    skill: "CSS",
    icon: <CssIcon></CssIcon>
  },
  {
      skill: "Bootstrap",
      icon: <BootstrapIcon></BootstrapIcon>
  },
  {
    skill: "SQL"
  },
  {
      skill: "Git",
      icon: <GitIcon></GitIcon>
  },
  {
      skill: "Visual Studio",
      icon: <VisualStudioIcon></VisualStudioIcon>
  }
];

const Skills = () => {
  return (
    <Panel title="Skills">
      <div className="d-flex flex-wrap justify-content-center">
        {skills &&
          skills.map((s, i) => {
            return <span key={i} title={s.skill}>{s.icon}</span>;
          })}
      </div>
    </Panel>
  );
};

export default Skills;
