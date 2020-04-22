import React, { Fragment } from "react";
import Panel from "../components/Panel";
import Chronology from "../components/Chronology";

const experience = [
  {
    dates: "Sept. 2014 - Jan. 2020",
    name: "Patient Care Analytics",
    location: "Thousand Palms, CA",
    title: "Web Application Developer",
    responsibilities: [
      "Develop multiple web applications using ReactJS and Material UI with data integration via APIs.",
      "Write endpoints for front-end integration using ASP.NET Web API.",
      "Mentored and guided multiple junior developers in best practices for front-end development.",
      "Develop a responsive single page application using AngularJS and AngularJS Material for front end with data integration via APIs.",
      "Develop, optimize, and maintain new and existing ASP.NET MVC web applications using jQuery and Bootstrap on the front-end and C# and SQL stored procedures on the back-end."
    ]
  },
  {
    dates: "June 2013 – July 2014",
    name: "Epic Management, LP",
    location: "Redlands, CA",
    title: "IS Projects Consultant",
    responsibilities: [
      "Migrate GroupWise Email documents to a shared drive in preparation to for change to Outlook",
      "Develop, stage, and deploy Thin Clients to clinics.",
      "Assist in Citrix 6.5 upgrade through various stages of deployment."
    ]
  }
];

const Experience = () => {
  return (
    <Panel title="Experience">
      {experience.map((e, i) => {
        return (
          <Fragment key={i}>
            <Chronology
              dates={e.dates}
              name={e.name}
              location={e.location}
              title={e.title}
              responsibilities={e.responsibilities}
            />
            <hr className="thick" />
          </Fragment>
        );
      })}
    </Panel>
  );
};

export default Experience;
