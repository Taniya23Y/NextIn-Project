import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import  logo from '../assets/img/logo.png';
import  navIcon1 from '../assets/img/nav-icon1.png';
import  navIcon2 from '../assets/img/nav-icon2.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState('false');

    useEffect( () => {
        const onscroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onscroll);

        return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpadateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" height={90}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle> 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#Features" className={activeLink === 'Features' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('Features')}>Features</Nav.Link>
                        <Nav.Link href="#Courses" className={activeLink === 'Cousrses' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('Courses')}>Courses</Nav.Link>
                        <Nav.Link href="#Tutorial" className={activeLink === 'Tutorial' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('Tutorial')}>Tutorial</Nav.Link>
                        <Nav.Link href="#Blog" className={activeLink === 'Blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('Blog')}>Blog</Nav.Link>
                        {/* <Nav.Link href="#contact us" className={activeLink === 'Contact us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadateActiveLink('Contact us')}>Contact us</Nav.Link> */}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""/></a>
                            <a href="#"><img src={navIcon2} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button>
                    </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}