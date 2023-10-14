import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["a Software Developer.", "an Engineer.", "an Innovator.", "a lifelong learner.", "a team player."];
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
                                <p><strong>I'm currently in my second year studying Applied Mathematics and Computer Engineering at Queen's University. I'm always looking to continuously learn and grow. I've also got a strong drive to innovate with a demonstrated team player mentality. I'm currently looking for an internship in the software space for Spring/Summer 2024. </strong></p>
                                <button onClick={() => window.location.href = "#connect"}>Let's Connect <ArrowRightCircle size={25} /></button>
                            </div>}
                    </TrackVisibility>
                </Row>
            </Container>
        </section>
    )
}