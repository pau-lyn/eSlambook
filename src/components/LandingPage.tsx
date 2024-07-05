import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";

import Daily from "../assets/daily.gif";
import PenIcon from "../assets/pen";
import ShareIcon from "../assets/share";
import RememberIcon from "../assets/remember";
import Reading from "../assets/reading.svg";

import "./styles.css";

function LandingPage() {
  return (
    <>
      <NavBar />
      <section className="home" id="home">
        <Container>
          <Row className="home-row d-flex justify-content-center align-items-center">
            <Col lg={6}>
              <p>Welcome to</p>
              <h1>E-Slambook</h1>
              <p>Write, Share, Remember</p>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={Reading} alt="computer" />
            </Col>
          </Row>
        </Container>
        <div className="home-2">
          <Container>
            <Row>
              <Col>
                <h5>Your Digital Memory Lane!</h5>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="about" id="about">
        <div className="write-share-remember">
          <Container>
            <Row>
              <Col>
                <PenIcon />
                <h3>Write</h3>
              </Col>
              <Col>
                <ShareIcon />
                <h3>Share</h3>
              </Col>
              <Col>
                <RememberIcon />
                <h3>Remember</h3>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="about-us d-flex justify-content-center align-items-center">
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={Daily} alt="Journaling" />
            </Col>
            <Col lg={6}>
              <h5>About Us</h5>
              <p>
                At eSlamBook, we believe that memories are more than just
                moments, they're the threads that connect us, weaving together
                the tapestry of our lives. Our mission is simple: to provide a
                digital platform where these precious memories can be captured,
                shared, and treasured for generations to come.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LandingPage;
