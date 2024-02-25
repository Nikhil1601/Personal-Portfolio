import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";

import githublogo from '../assets/img/Github_white.svg';
import twitterlogo from '../assets/img/Twitter_white.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/nikhil-gautam16"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Nikhil1601/"><img src={githublogo} alt="" /></a>
                <a href="https://x.com/nikhilGautam016?t=ys2a5z_X8iOreVZwFoDf1A&s=09"><img src={twitterlogo} alt="" /></a>
            </div>
            <p>Nikhil gautam Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
