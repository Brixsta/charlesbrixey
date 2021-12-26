import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../css/Menu.css'

const Menu = () => {
    return (
        <div>
            <Navbar className={'fixed-top'} collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <img src="./images/logo.png" className={'logo'}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <GiHamburgerMenu></GiHamburgerMenu>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#applications" className={'first-link'}>
                            <div className={'button-underline'}></div>
                            APPLICATIONS
                        </Nav.Link>
                        <Nav.Link
                            onClick={() =>
                                window.open(
                                    `https://www.youtube.com/channel/UCSbSnlykuqApwsDJzGo5RNA`,
                                    '_blank'
                                )
                            }
                        >
                            <div className={'button-underline'}></div>
                            YOUTUBE
                        </Nav.Link>
                        <Nav.Link href="#techstack">
                            <div className={'button-underline'}></div>
                            TECH STACK
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            <div className={'button-underline'}></div>
                            CONTACT
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu
