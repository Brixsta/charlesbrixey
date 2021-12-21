import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export const Styles = styled.div`
    .applications-title-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }

    .applications-title {
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
    }

    .applications-line-left {
        width: 100%;
        height: 1px;
        background-image: linear-gradient(
            to right,
            rgba(70, 130, 180, 0),
            rgba(70, 130, 180, 1)
        );
    }

    .applications-line-right {
        width: 100%;
        height: 1px;
        background-image: linear-gradient(
            to left,
            rgba(70, 130, 180, 0),
            rgba(70, 130, 180, 1)
        );
    }

    .card {
        margin-left: 1rem;
        margin-right: 1rem;
        box-sizing: border-box;
        border: solid 1px steelblue;
        border-radius: 0px;
        background-color: steelblue;
        color: white;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
        font-family: 'Open Sans', sans-serif;
        background-color: #021c37;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    .card:hover {
        transform: scale(0.95);
    }

    .card img {
        border-radius: 0px;
    }

    .card-title {
        padding: 0.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-size: 1.2rem;
        background-color: #021c37;
        width: fit-content;
        margin: auto;
        font-family: 'Montserrat', sans-serif;
        border: solid 1px steelblue;
        box-sizing: border-box;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
    }

    .card-text {
        text-align: center;
        margin-top: 1rem;
        font-family: 'Open Sans', sans-serif;
    }

    @media only screen and (max-width: 991px) {
        .card {
            margin-bottom: 3rem;
        }
    }

    @media only screen and (max-width: 767px) {
        .last-card {
            margin-bottom: 0rem;
        }
    }

    @media only screen and (max-width: 770px) {
        .card-title {
            font-size: 1.1rem;
        }
    }

    @media only screen and (max-width: 550px) {
        .applications-title {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 450px) {
        .applications-title {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 420px) {
        .card {
            width: 19rem !important;
        }
    }

    @media only screen and (max-width: 370px) {
        .card {
            width: 18rem !important;
        }
    }
    @media only screen and (max-width: 340px) {
        .card {
            width: 17rem !important;
        }
    }
`

export const Applications = () => (
    <Styles>
        <Container>
            <Row>
                <Col className={'d-flex justify-content-center'}>
                    <div className={'applications-title-container'}>
                        <div className={'applications-line-left'}></div>
                        <h1 className={'applications-title'}>APPLICATIONS</h1>
                        <div className={'applications-line-right'}></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className={'d-flex justify-content-around'}
                >
                    <Card style={{ width: '25em' }}>
                        <Card.Img variant="top" src="./images/Memory.png" />
                        <Card.Body>
                            <Card.Title>WWF Memory</Card.Title>
                            <Card.Text>
                                Memory Game written to vanilla JS.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className={'d-flex justify-content-center'}
                >
                    <Card style={{ width: '25em' }}>
                        <Card.Img variant="top" src="./images/Employee.png" />
                        <Card.Body>
                            <Card.Title>Employee Finder</Card.Title>
                            <Card.Text>
                                Employee connection app utilizing React and D3.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className={'d-flex justify-content-center'}
                >
                    <Card style={{ width: '25em' }} className={'last-card'}>
                        <Card.Img variant="top" src="./images/Old.png" />
                        <Card.Body>
                            <Card.Title>My Old Website</Card.Title>
                            <Card.Text>Got to start somewhere right?</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Styles>
)
