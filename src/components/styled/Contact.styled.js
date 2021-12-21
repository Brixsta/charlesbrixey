import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

    .form-control {
        width: 30rem;
        padding: 1rem;
        font-family: 'Open Sans', sans-serif;
        background-color: transparent;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
        border: solid 1px steelblue;
        color: white;
        resize: none;
        border-radius: 0;
    }

    .form-label {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.3rem;
        margin: 0;
        padding: 0.6rem 0rem;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 0;
        margin: 0;
    }

    input[type='submit'] {
        font-family: 'Open Sans', sans-serif;
        background-color: transparent;
        color: white;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
        border: solid 1px steelblue;
        margin-top: 1rem;
        margin-bottom: 5rem;
        padding: 0.8rem 5rem;
        border-radius: 0;
        cursor: pointer;
    }

    @media only screen and (max-width: 550px) {
        .form-control {
            width: 20rem;
        }

        input[type='submit'] {
            padding: 0.5rem 3rem;
        }

        .contact-title {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 450px) {
        .contact-title {
            font-size: 1rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
    }
    @media only screen and (max-width: 350px) {
        .form-control {
            width: 15rem;
        }
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
        <Container>
            <Row>
                <Col
                    sm={12}
                    xs={12}
                    className={'d-flex justify-content-center'}
                >
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>MESSAGE</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button
                            as="input"
                            type="submit"
                            value="Submit"
                        ></Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Styles>
)
