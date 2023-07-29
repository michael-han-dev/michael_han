import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github1.svg';
import navIcon3 from '../assets/img/WhiteD.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1><strong>The End. Come again soon!</strong></h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/michael-y-han/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/michael-han-dev" target="_blank"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://devpost.com/voyager14" target="_blank"><img src={navIcon3} alt="Devpost" /></a>
            </div>
            <p>Michael Han © twentytwentythree</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}