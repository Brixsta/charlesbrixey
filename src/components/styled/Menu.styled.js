import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export const Styles = styled.div`
    .button-underline {
        position: absolute;
        height: 100%;
        width: 0%;
        background-color: #021c37;
        bottom: 7px;
        height: 2px;
        transition: all 500ms ease-in-out;
        transform: translateX(50%);
        right: 50%;
    }

    .navbar {
        width: 100vw;
        background-color: steelblue;
        padding: 1rem;

        box-shadow: 0px 0px 10px black;
    }

    .navbar a {
        color: white;
        font-family: 'Montserrat', sans-serif;
    }

    .navbar-light .navbar-nav .nav-link {
        color: white;
        font-size: 1.1rem;
        position: relative;
        height: 100%;
        font-family: 'Montserrat', sans-serif;
    }

    .navbar-light .navbar-nav .nav-link:hover .button-underline {
        width: 80%;
    }

    .navbar-light .navbar-toggler {
        color: white;
        border-color: #021c37;
        outline: none;
        transition: none;
    }

    .navbar-light .navbar-toggler:active {
        outline: none;
    }

    @media only screen and (max-width: 990px) {
        .navbar {
        }

        .button-underline {
            display: none;
        }
    }
`

export const Menu = () => (
    <Styles>
        <Navbar className={'fixed-top'} collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">cBrixey</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#applications">
                        <div className={'button-underline'}></div>APPLICATIONS
                    </Nav.Link>
                    <Nav.Link href="#youtube">
                        <div className={'button-underline'}></div>YOUTUBE
                    </Nav.Link>
                    <Nav.Link href="#techstack">
                        <div className={'button-underline'}></div>TECH STACK
                    </Nav.Link>
                    <Nav.Link href="#contact">
                        <div className={'button-underline'}></div>CONTACT
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
