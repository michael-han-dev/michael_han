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
import pp from "../assets/img/pp.png";
import flash from "../assets/img/gallery.png";
import moonshot from "../assets/img/moonshot.png";
import qec from "../assets/img/qec.png";
import qcbt from "../assets/img/qcbt.png";
import bizz from "../assets/img/bizzatom.png";


    
export const Projects = () => {
    

    const WorkExp = [
        {
            title: "Summer Research Student",
            timeline: "May 2023 - September 2023",
            description: "Working under Dr. Qing Ma to conduct mathematical modelling on pharmacokinetics.",
            imgUrl: UBuff,
            href: "https://pharmacy.buffalo.edu/news-events/publications/enotes/2020-spring-enotes.host.html/content/shared/pharmacy/articles/academic_articles/2020/qing-ma-awarded--4-million-to-study-influence-of-prescribed-drugs-on-mental-health-in-hiv-patients.detail.html",
        },
        {
            title: "Strategy and Operations",
            timeline: "June 2023 - August 2023",
            description: "Developing user acquistion strategies, market research, innovation ideation, and business development.",
            imgUrl: bizz,
            href: "https://www.linkedin.com/company/bizz-atomic/",
        },
        {
            title: "Project Manager Intern for Illuminate Universe",
            timeline: "June 2023 - August 2023",
            description: "Planning and executing the teaching of classes on the transition from high school to university ensuring students plan ahead.",
            imgUrl: Illuminate,
            href: "https://www.illuminateuniverse.com/",
        },
        {
            title: "Parks Operations at the City of Mississauga",
            timeline: "May 2023 - August 2023",
            description: "Maintaining 2 community centres and 15 sport fields.",
            imgUrl: Miss,
            href: "https://jobs.mississauga.ca/job/Parks-Operations-I-Long-Term-Temp-%28Seasonal%29/565529417/",
        },
        {
            title: "Technical Consultant at Queen's Startup Consulting",
            timeline: "March 2023 - Present",
            description: "Leveraging background in technology and engineering to assist business consultants.",
            imgUrl: qsc,
            href: "https://www.queensstartupconsulting.com/",
        },
        {
            title: "Junior Developer at Queen's Tech and Media Association",
            timeline: "March 2023 - Present",
            description: "Developing a product to reinvent productivity at Queen's premier technology incubator.",
            imgUrl: qtma,
            href: "https://www.qtma.ca/",
        },
        {
            title: "Power Systems Engineer at Queen's Hyperloop Design Team",
            timeline: "September 2022 - April 2023",
            description: "Responsible for redesigning the battery system of the generation 2 hyperloop pod. ",
            imgUrl: QHDT,
            href: "https://queenshyperloop.ca/",
        },
        {
            title: "Quantitative Analyst at Queen's Quantitative Analysis Trading Team",
            timeline: "September 2022 - March 2023",
            description: "Coded an algorithm using python and quantconnect to trade synthetic futures based on a moving average + rsi.",
            imgUrl: quantt,
            href: "http://quantt.ca/",
        },
        {
            title: "Software Engineer at Queen's Biomechatronics Team",
            timeline: "October 2022 - March 2023",
            description: "Used C and arduino to control motor range of motion of knee joints on the exoskeleton",
            imgUrl: qbmet,
            href: "https://qbmet.ca/",
        }
    ]

    const projects = [
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
            title: "Top 14 in Moonshot Pirates",
            description: "Over 1300 brilliant young minds aged 15 to 20 from 150+ countries joined the Shape the Future Challenge, in collaboration with Volkswagen Group, to work on groundbreaking solutions for a greener, more sustainable, and accessible future of mobility.",
            imgUrl: moonshot,
            href: "https://www.linkedin.com/posts/michael-y-han_project-dauntless-moonshot-pitch-activity-7071686585963970560-2qIw?utm_source=share&utm_medium=member_desktop",
        },
        {
            title: "Business Competitions Member",
            timeline: "January 2023 - Present",
            description: "Presented report on the socio-economic feasibility of hyperloop at European Hyperloop Week at the University of Edinburgh in Scotland.",
            imgUrl: QHDT,
            href: "https://www.linkedin.com/in/michael-y-han/details/experience/2127724316/multiple-media-viewer/?profileId=ACoAADLPF8gB27uFNjKi0YlXimHowSvoHMhPdFs&treasuryMediaId=1635534757592",
        },
        {
            title: "First Year Representative for the Queen's Engineering Competition",
            timeline: "October 2022 - February 2023",
            description: "Marketed competition to 880 first-year engineering students, Collaborated with cross-functional teams to ensure logistics and competition challenges were smoothly run",
            imgUrl: qec,
            href: "https://queensengineeringcompetition.com/",
        },
        {
            title: "First Year Representative for the Queen's Competition on Business and Technology",
            timeline: "September 2022 - March 2023",
            description: "Worked with various directors including logistics, marketing, speakers, and sponsorships.",
            imgUrl: qcbt,
            href: "https://www.qcbt.ca/",
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
                                    Competitions and Other
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