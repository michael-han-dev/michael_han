import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import python from "../assets/img/python.png";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Substack!
                        </h2>
                        <p>Read about my thoughts on climate, and other activities.</p>
                        <Carousel responsive={responsive} infinite ={true} className="skill-slider">
                            <div className="item">
                                <img src={python} alt = "Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt = "Image" />
                                <h5>Web Development2</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt = "Image" />
                                <h5>Web Development3</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt = "Image" />
                                <h5>Web Development4</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}