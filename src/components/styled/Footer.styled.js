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
        height: 200px;
        width: 100vw;
        font-size: 5rem;
        color: #021c37;
        display: flex;
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
    }
`

export const Footer = () => (
    <Styles>
        <Container fluid>
            <Row>
                <Col>
                    <AiFillGithub></AiFillGithub>
                    <AiFillFacebook></AiFillFacebook>
                    <AiFillLinkedin></AiFillLinkedin>
                </Col>
            </Row>
        </Container>
    </Styles>
)
