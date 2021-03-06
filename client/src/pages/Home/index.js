import React from "react";
import "./style.css";
import HomeNav from "../../components/HomeNav";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import Teachers from "./images/teachers.jpg";

function Home() {
  return (
    <div>
      <HomeNav />
      <Container>
        <h1>Welcome to Matrixio</h1>
        <hr />
        <Row>
          <Col size="lg-6 md-12">
            <img src={Teachers} className="teacherImg" alt="teachers" />
          </Col>
          <Col size="lg-6 md-12">
            <h1>Our Story</h1>
            <p>
              Online templates used for tracking speech and learning exercises
              are really hard to find. The Matrixio team has developed an
              application that allows users, of any field, to build alterable
              learning matrices for each of their students' unique needs.
              Matrixio will save each student's learning matrices in a database
              that is retrievable for future reference upon log in.
            </p>
            <p className="quote">
              <b>
                "Matrixio is a blessing, it solved all my matrix tracking and
                generating needs."
              </b>{" "}
              - Local CT Speech Pathologist
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
