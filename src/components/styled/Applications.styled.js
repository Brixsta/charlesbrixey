import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export const Styles = styled.div`
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
        transition: all 100ms linear;
        overflow: hidden;
        z-index: 100;
        padding: 1rem !important;
    }
    .card:hover {
        border: solid 1px white;
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

    img {
        border-radius: 0;
    }

    .card-text {
        text-align: center;
        margin-top: 1rem;
        font-family: 'Open Sans', sans-serif;
    }

    .card-row {
        padding: 0rem 2rem;
    }

    @media only screen and (max-width: 991px) {
        .card {
            margin-bottom: 3rem;
        }
        .last-card {
            margin-bottom: 0rem;
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
        .section-title {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 450px) {
        .section-title {
            font-size: 1rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
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

export const Applications = (props) => (
    <Styles>
        <Container fluid>
            <Row>
                <Col className={'d-flex justify-content-center'}>
                    <div className={'title-container'}>
                        <div className={'line-left'}>
                            <div className={'left-block'}></div>
                        </div>
                        <h1 className={'section-title'}>APPLICATIONS</h1>
                        <div className={'line-right'}>
                            <div className={'right-block'}></div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={'card-row'}>
                <Col
                    lg={4}
                    md={6}
                    sm={12}
                    xs={12}
                    className={'d-flex justify-content-around'}
                >
                    <Card
                        onClick={() =>
                            window.open(
                                `https://dirty-request.surge.sh`,
                                '_blank'
                            )
                        }
                    >
                        <Card.Img variant="top" src="./images/Memory.png" />
                        <Card.Body>
                            <Card.Title>WWF MEMORY</Card.Title>
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
                    <Card onClick={() => alert('Coming Soon!')}>
                        <Card.Img variant="top" src="./images/Employee.png" />
                        <Card.Body>
                            <Card.Title>EMPLOYEE FINDER</Card.Title>
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
                    <Card
                        onClick={() =>
                            window.open(
                                `https://numberless-dog.surge.sh/`,
                                '_blank'
                            )
                        }
                        className={'last-card'}
                    >
                        <Card.Img variant="top" src="./images/Old.png" />
                        <Card.Body>
                            <Card.Title>MY OLD WEBSITE</Card.Title>
                            <Card.Text>Got to start somewhere right?</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Styles>
)
