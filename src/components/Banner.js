import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["a Software Developer.", "an Engineer.", "an ML Enthusiast.", "an Entrepreneur."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i  = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm Michael, `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "a Software Developer.", "an Engineer.", "an ML Enthusiast.", "an Entrepreneur."]'><span className="wrap">{text}</span></span></h1>
                                <p><strong>Currently in my second year studying Computer Engineering with an option in Innovation and Entrepreneurship at Queen's University. High entrepreneurship drive with a strong team player mentality, looking to work at an innovative company in the software space.</strong></p>
                                <button onClick={() => window.location.href = "#connect"}>Let's Connect <ArrowRightCircle size={25} /></button>
                            </div>}
                    </TrackVisibility>
                </Row>
            </Container>
        </section>
    )
}