import React from "react";

const Panel = ({ title="", children = null, hasTitle = true }) => {
  return (
    <section>
      <h1 className="primary-font">{title}</h1>
    {hasTitle&&   <hr className="thick"></hr>}
      <div className="p-4" >{children}</div>
      <style jsx>{`
     
        hr.thick {
          margin-top: 0;
          border-top: 3px solid rgba(0, 0, 0, 0.3);
      }
     
      `}</style>
    </section>
  );
};

export default Panel;
