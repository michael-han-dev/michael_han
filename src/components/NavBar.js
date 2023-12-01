import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github1.svg';
import navIcon3 from '../assets/img/WhiteD.svg';
import michaelResume from "../assets/img/Michael_Han_SWE_Resume.pdf";

export const NavBar = () => {
    const [activelink, setActiveLink] = useState ('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleDownload = () => {
        window.open(michaelResume, "_blank");
    };

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar=toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className = {activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#project" className = {activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#connect" className = {activelink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Contact</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/michael-y-han/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="https://github.com/michael-han-dev" target="_blank"><img src={navIcon2} alt="GitHub" /></a>
                        <a href="https://devpost.com/voyager14" target="_blank"><img src={navIcon3} alt="Devpost" /></a>
                    </div>
                    <button onClick={handleDownload}><span>Resume</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}