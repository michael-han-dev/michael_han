import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import UBuff from "../assets/img/UBuffLogo.png";
import Illuminate from "../assets/img/Illi4.png";
import Miss from "../assets/img/Miss.png";
import qsc from "../assets/img/QSC.png";
import qtma from "../assets/img/qtma1.png";
import QHDT from "../assets/img/QHDT.png";
import quantt from "../assets/img/QUANTT.png";
import qbmet from "../assets/img/QBMET.png";
import juploy from "../assets/img/Juploy.png";
import pp from "../assets/img/pp.png";
import flash from "../assets/img/gallery.png";
import bizz from "../assets/img/bizzatom.png";
import ssEDI from "../assets/img/ssEDI.png";
import ultron from "../assets/img/ultron.png";
import starp from "../assets/img/starp.png";
import qdwin from "../assets/img/qdwin.png";
import reflect from "../assets/img/reflect.png";
import RAI from "../assets/img/Logo_RAI.png";


    
export const Projects = () => {
    

    const WorkExp = [
        {
            title: "Risk Analyst at Risk Analytics Institute.",
            timeline: "May 2024 - August 2024",
            description: "Developed Python and R code models for Risk Analysis and Risk Management courses.",
            imgUrl: RAI,
            href: "https://www.rainstitute.org/",
        },
        {
            title: "Summer Research Student",
            timeline: "May 2023 - September 2023",
            description: "Worked under Dr. Qing Ma to conduct mathematical modelling on pharmacokinetics. Specifically ADME rates. Used winnolin and monolix modelling software.",
            imgUrl: UBuff,
            href: "https://pharmacy.buffalo.edu/news-events/publications/enotes/2020-spring-enotes.host.html/content/shared/pharmacy/articles/academic_articles/2020/qing-ma-awarded--4-million-to-study-influence-of-prescribed-drugs-on-mental-health-in-hiv-patients.detail.html",
        },
        {
            title: "Strategy and Operations",
            timeline: "June 2023 - August 2023",
            description: "A startup teaching business to children ages 8-13. Developed user acquistion strategies, market research, innovation ideation, and business development.",
            imgUrl: bizz,
            href: "https://www.linkedin.com/company/bizz-atomic/",
        },
        {
            title: "Project Manager Intern for Illuminate Universe",
            timeline: "June 2023 - August 2023",
            description: "Planned and executed the teaching of classes on the transition from high school to university ensuring students plan ahead.",
            imgUrl: Illuminate,
            href: "https://www.illuminateuniverse.com/",
        },
        {
            title: "Technical Consultant at Queen's Startup Consulting",
            timeline: "March 2023 - April 2024",
            description: "Leveraging background in technology and engineering to assist business consultants.",
            imgUrl: qsc,
            href: "https://www.queensstartupconsulting.com/",
        },
        {
            title: "Software Developer at Queen's Tech and Media Association",
            timeline: "March 2023 - April 2024",
            description: "Developing a product to reinvent productivity using Java, MongoDB and Android Mobile.",
            imgUrl: qtma,
            href: "https://www.qtma.ca/",
        },
        {
            title: "Quantitative Analyst at Queen's Quantitative Analysis Trading Team",
            timeline: "September 2022 - March 2023",
            description: "Coded an algorithm using python and quantconnect to trade synthetic futures based on a moving average + rsi.",
            imgUrl: quantt,
            href: "http://quantt.ca/",
        }
    ]

    const projects = [
        {
            title: "Juploy",
            description: "Building the next gen job board and networking tool! Follow along and sign up for updates.",
            imgUrl: juploy,
            href: "https://www.juploy.com/",
        },
        {
            title: "Pitch Perfect",
            description: "Built an automatic pitch deck generator using Figma, Python, JavaScript, HTML/CSS, Flask, gpt API. The pitch generator created slides and a corresponding pitch script based on a prompt, a logo idea, and the length of your pitch.",
            imgUrl: pp,
            href: "https://devpost.com/software/qmind-qbmet-hyperloop-else",
        },
        {
            title: "Smart Flash Cards",
            description: "Flash card generator which enables a pdf upload to automatically generate flashcards empowering users to study more efficiently. Other features similar to anki. Built with Vue.js, Tailwind, Flask, Python, Node, and the gpt API.",
            imgUrl: flash,
            href: "https://github.com/michael-han-dev/smartCards",
        },
    ]

    const miscStuff = [
        {
            title: "To 10x my innovation ability in 2 weeks",
            description: "A reflection on my experience in the Ari global program.",
            imgUrl: reflect,
            href: "https://open.substack.com/pub/michaelhan/p/to-10x-in-2-weeks?r=2lwyxr&utm_campaign=post&utm_medium=web",
        },
        {
            title: "Transforming Ancient Technology: Windows",
            description: "A project idea involving quantum dots and incorporating them into a double paned solar window.",
            imgUrl: qdwin,
            href: "https://open.substack.com/pub/michaelhan/p/powering-structures-with-windows?r=2lwyxr&utm_campaign=post&utm_medium=web",
        },
        {
            title: "Fusing Futures - Shaping Climate Solutions with Star Power",
            description: "Discussing the fusion landscape. Analysis of Helion, a fusion startup and ITER, the largest fusion project.",
            imgUrl: starp,
            href: "https://open.substack.com/pub/michaelhan/p/fusing-futures-shaping-climate-solutions?r=2lwyxr&utm_campaign=post&utm_medium=web",
        },
        {
            title: "A 10x Idea Using LLMs: The Age of Ultron",
            description: "Discussing an idea I had to create a super LLM which has the potential to solve many climate problems.",
            imgUrl: ultron,
            href: "https://open.substack.com/pub/michaelhan/p/a-10x-idea-using-llms-the-age-of?r=2lwyxr&utm_campaign=post&utm_medium=web",
        },
        {
            title: "Short Reflection on the European Hyperloop Week Presentation",
            description: "A reflection on my trip to Edinburgh Scotland with the Queen's Hyperloop Design Team. Also my first ever substack reflection!",
            imgUrl: ssEDI,
            href: "https://open.substack.com/pub/michaelhan/p/short-reflection-on-the-european?utm_campaign=post&utm_medium=web",
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Currently...</h2>
                    <p>Below you can find a little about what I'm working on right now and what I've worked on previously.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    Professional Experience
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    Projects
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Substack Writing
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            WorkExp.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            miscStuff.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}