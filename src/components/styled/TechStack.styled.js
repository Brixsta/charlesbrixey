import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { VscServerEnvironment } from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import { FaPalette } from 'react-icons/fa'
import { SiMaterialdesignicons } from 'react-icons/si'

const Styles = styled.div`
    .techstack-bar {
        height: 7rem;
        width: 70%;
        margin-bottom: 2rem;
        display: flex;
        border: solid 1px steelblue;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
    }

    .techstack-square {
        height: 100%;
        width: 30%;
        background-color: transparent;
        z-index: 100;
        border-right: 1px solid steelblue;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 0.5rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
    }

    .techstack-bar-content {
        width: 70%;
        padding: 1rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        font-family: 'Open Sans', sans-serif;
    }

    .square-title {
        margin-top: 0.2rem;
    }

    .last-bar {
        margin-bottom: 0;
    }
    @media only screen and (max-width: 768px) {
        .square-title {
            font-size: 0.8rem;
        }

        .techstack-bar-content {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 550px) {
        .square-title {
            font-size: 0.7rem;
        }
        .section-title {
            font-size: 2rem;
        }
    }
    @media only screen and (max-width: 450px) {
        .techstack-bar-content {
            width: 60%;
        }
        .techstack-square {
            width: 40%;
        }

        .techstack-bar-content {
            font-size: 1rem;
        }

        .section-title {
            font-size: 1rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
        .techstack-bar-content {
            width: 55%;
        }
        .techstack-square {
            width: 45%;
        }
        .square-title {
            font-size: 0rem;
        }
    }
`

export const TechStack = () => (
    <Styles>
        <Container fluid>
            <Row>
                <Col className={'d-flex justify-content-center'}>
                    <div className={'title-container'}>
                        <div className={'line-left'}>
                            <div className={'left-block'}></div>
                        </div>
                        <h1 className={'section-title'}>TECH STACK</h1>
                        <div className={'line-right'}>
                            <div className={'right-block'}></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={
                        'd-flex align-items-center justify-content-center'
                    }
                >
                    <div className={'techstack-bar'}>
                        <div className={'techstack-square'}>
                            <IconContext.Provider
                                value={{ color: 'white', size: '40%' }}
                            >
                                <FaPalette></FaPalette>
                            </IconContext.Provider>
                            <span className={'square-title'}>FRONTEND</span>
                        </div>
                        <div className={'techstack-bar-content'}>
                            Javascript, UI/UX, HTML 5, CSS.
                        </div>
                    </div>
                </Col>
                <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={
                        'd-flex align-items-center justify-content-center'
                    }
                >
                    <div className={'techstack-bar'}>
                        <div className={'techstack-square'}>
                            <IconContext.Provider
                                value={{ color: 'white', size: '40%' }}
                            >
                                <VscServerEnvironment></VscServerEnvironment>
                            </IconContext.Provider>
                            <span className={'square-title'}>BACKEND</span>
                        </div>
                        <div className={'techstack-bar-content'}>
                            NodeJS, ExpressJS, SQL, Postgres.
                        </div>
                    </div>
                </Col>
                <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={
                        'd-flex align-items-center justify-content-center'
                    }
                >
                    <div className={'techstack-bar last-bar'}>
                        <div className={'techstack-square'}>
                            <IconContext.Provider
                                value={{ color: 'white', size: '40%' }}
                            >
                                <SiMaterialdesignicons></SiMaterialdesignicons>
                            </IconContext.Provider>
                            <span className={'square-title'}>FRAMEWORKS</span>
                        </div>
                        <div className={'techstack-bar-content'}>
                            React, D3, Bootstrap.
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Styles>
)
