import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Styles = styled.div`
    .button-underline {
        position: absolute;
        height: 100%;
        width: 0%;
        background-color: #021c37;
        transition: all 500ms ease-in-out;
        transform: translateX(50%);
        bottom: 0px;
        right: 50%;
        z-index: -1;
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

    .navbar-light .navbar-nav .nav-link:focus,
    .navbar-light .navbar-nav .nav-link:active {
        outline: none;
    }

    .navbar-light .navbar-nav .nav-link:hover .button-underline {
        width: 100%;
    }

    .navbar-light .navbar-toggler {
        color: #021c37;
        border-color: #021c37;
        outline: none;
        transition: none;
    }

    .navbar-toggler:focus {
        box-shadow: none;
    }

    .navbar-light .navbar-toggler:active {
        outline: none;
        color: #021c37;
    }

    .navbar-light {
        color: orange;
    }

    @media only screen and (max-width: 990px) {
        .navbar-light .navbar-nav .nav-link {
            text-align: center;
            width: 100vw;
            margin-left: -16px;
        }

        .navbar-light .navbar-nav .nav-link:hover {
            background-color: #021c37;
            text-align: center;
        }

        .button-underline {
            display: none;
        }

        .first-link {
            margin-top: 0.71rem;
        }
    }
`

export const Menu = () => (
    <Styles>
        <Navbar className={'fixed-top'} collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">cBrixey</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <GiHamburgerMenu></GiHamburgerMenu>
            </Navbar.Toggle>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#applications" className={'first-link'}>
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
