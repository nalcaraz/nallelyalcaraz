import React from "react";
import Panel from "../components/Panel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <Panel hasTitle={false}>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src="/nallely_headshot.JPG" fluid roundedCircle />
          </Col>
        </Row>
      </Container>
      <div className="primary-font mt-4 mb-4 w-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 text-nowrap">Nallely Alcaraz</h1>
        <h1> Web Developer</h1>
        <h2> Inland Empire </h2>
      </div>
      <p>
        {" "}
        Web Developer based out of the Inland Empire with over five years
        experience in developing, optimizing, and maintaining interactive web
        applications using various front-end frameworks with data integration
        using C# and SQL on the back-end. Knowledgeable in JavaScript, HTML,
        CSS, C# and SQL.{" "}
      </p>
    </Panel>
  );
};

export default About;
