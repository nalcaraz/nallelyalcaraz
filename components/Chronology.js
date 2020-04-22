import React from "react";

const Chronology = ({ dates, name,location, title, responsibilities }) => {
  return (
    <div>
      <p>
        <strong>{dates}</strong>
      </p>
      <p className="lead">{name}, <small>{location}</small> </p>
      <p>
        <em>{title}</em>
      </p>
      {responsibilities &&
        responsibilities.length > 0 &&
        responsibilities.map((r, i) => {
          return (
            <p key={i} className="responsibilities">
              &#8226; {r}
            </p>
          );
        })}
      <style jsx>{`
        p {
          margin: 0 0 8px 0;
        }
        .responsibilities {
          padding-left: 8px;
        }
      `}</style>
    </div>
  );
};

export default Chronology;
