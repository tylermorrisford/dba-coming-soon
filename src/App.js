import "./App.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Col, Row } from "react-bootstrap";
import Logo from "./assets/logo/dba_logo.svg";
import InstaLogo from "./assets/links/instagram.svg";
import LinkedLogo from "./assets/links/linkedin.svg";

function App() {
  return (
    <div className="App">
      <Card className="child">
        <Card.Body>
          <Row className="space">
            <Col md={6} sm={12}>
              <div className="logo-container">
                  <Image
                    fluid
                    src={Logo}
                    alt="Dancing Bees Apothecary Logo"
                    className="image"
                  />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="text-container">
                <h4 className="title">Dancing Bees Apothecary - Coming Soon</h4>
                <div className="text">
                  <p>
                    Guiding the hive to holistic wellness through quality
                    products, education and advocacy, Dancing Bees strives to
                    increase access to quality medical cannabis for patients in
                    Utah while positively affecting the opioid epidemic, social
                    justice, mental health, gender equity, and community
                    awareness.
                    <br />
                    Coming soon!
                  </p>
                  <p>
                    Dancing Bees Apothecary is a medical cannabis processing
                    establishment with an “Intent to License” in Salt Lake City,
                    Utah.
                  </p>
                </div>
                <div className="links">
                  Find us on: <br />
                  <span>
                    <a href="https://www.instagram.com/dancingbeesapothecary/?igshid=YmMyMTA2M2Y%3D">
                      <Image
                        width="100%"
                        height="100%"
                        src={InstaLogo}
                        alt="Instagram Link"
                      />
                    </a>
                    <a href="#">
                      <Image
                        width="90%"
                        height="90%"
                        src={LinkedLogo}
                        alt="LinkedIn Link"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
