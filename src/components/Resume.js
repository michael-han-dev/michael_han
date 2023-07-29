import { Container, Row, Col } from "react-bootstrap";
import michaelResume from "../assets/img/Michael_Han_Resume.pdf";

export const Resume = () => {

    const handleDownload = () => {
        window.open(michaelResume, "_blank");
    };


    return(
        <section className="resume" id="resume">
            <Container>
                <Row>
                    <Col>
                        <h2>My Resume</h2>
                        <span className="resume-text">
                            <button onClick={handleDownload}><span>Download</span></button>
                        </span>
                        <embed src={michaelResume} alt="Resume" style={{ height: "100vh", width: "100%" }} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}