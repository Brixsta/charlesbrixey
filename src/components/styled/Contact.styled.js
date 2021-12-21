import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Styles = styled.div`
    .contact-title-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }

    .contact-title {
        margin: 5rem 0rem;
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        z-index: 100;
        background-color: steelblue;
        color: white;
        padding: 2rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: fit-content;
    }

    .contact-line-left {
        width: 100%;
        height: 1px;
        background-image: linear-gradient(
            to right,
            rgba(70, 130, 180, 0),
            rgba(70, 130, 180, 1)
        );
    }

    .contact-line-right {
        width: 100%;
        height: 1px;
        background-image: linear-gradient(
            to left,
            rgba(70, 130, 180, 0),
            rgba(70, 130, 180, 1)
        );
    }
`

export const Contact = () => (
    <Styles>
        <Container>
            <Row>
                <Col className={'d-flex justify-content-center'}>
                    <div className={'contact-title-container'}>
                        <div className={'contact-line-left'}></div>
                        <h1 className={'contact-title'}>CONTACT</h1>
                        <div className={'contact-line-right'}></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Styles>
)
