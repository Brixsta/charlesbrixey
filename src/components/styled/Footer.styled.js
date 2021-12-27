import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

const Styles = styled.div`
    .container-fluid {
        background-color: steelblue;
        width: 100vw;
        color: #021c37;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    .row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    svg {
        margin: 0rem 2rem;
        cursor: pointer;
    }

    .col {
        border: solid 10px #021c37;
        display: flex;
        padding: 1rem;
        font-size: 5rem;
    }

    @media only screen and (max-width: 510px) {
        svg {
            margin: 0rem 1rem;
        }

        .col {
            font-size: 4rem;
        }
    }
`

export const Footer = () => (
    <Styles>
        <Container fluid>
            <Row>
                <Col>
                    <AiFillGithub
                        onClick={() =>
                            window.open(
                                `https://www.github.com/Brixsta`,
                                '_blank'
                            )
                        }
                    ></AiFillGithub>
                    <AiFillFacebook
                        onClick={() =>
                            window.open(
                                `https://www.facebook.com/charles.brixey.9`,
                                '_blank'
                            )
                        }
                    ></AiFillFacebook>
                    <AiFillLinkedin
                        onClick={() =>
                            window.open(
                                `https://www.linkedin.com/in/charles-brixey-53144680/`,
                                '_blank'
                            )
                        }
                    ></AiFillLinkedin>
                </Col>
            </Row>
        </Container>
    </Styles>
)
