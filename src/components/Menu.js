import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, Element } from 'react-scroll'

const Menu = () => {
    return (
        <div>
            <Navbar className={'fixed-top'} collapseOnSelect expand="lg">
                <Link className={'scroll-link'} to="home">
                    <Navbar.Brand href="#home">cBrixey</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <GiHamburgerMenu></GiHamburgerMenu>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className={'scroll-link'} to="applications">
                            <Nav.Link
                                href="#applications"
                                className={'first-link'}
                            >
                                <div className={'button-underline'}></div>
                                APPLICATIONS
                            </Nav.Link>
                        </Link>
                        <Link className={'scroll-link'} to="youtube">
                            <Nav.Link
                                onClick={() =>
                                    window.open(
                                        `https://www.youtube.com/channel/UCSbSnlykuqApwsDJzGo5RNA`,
                                        '_blank'
                                    )
                                }
                                href="#youtube"
                            >
                                <div className={'button-underline'}></div>
                                YOUTUBE
                            </Nav.Link>
                        </Link>
                        <Link className={'scroll-link'} to="techstack">
                            <Nav.Link href="#techstack">
                                <div className={'button-underline'}></div>
                                TECH STACK
                            </Nav.Link>
                        </Link>
                        <Link className={'scroll-link'} to="contact">
                            <Nav.Link href="#contact">
                                <div className={'button-underline'}></div>
                                CONTACT
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu
