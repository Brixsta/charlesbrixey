import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'

const Styles = styled.div`
    .form-control {
        width: 40rem;
        padding: 1rem;
        font-family: 'Open Sans', sans-serif;
        background-color: transparent;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
        border: solid 1px steelblue;
        color: white;
        resize: none;
        border-radius: 0;
        margin-bottom: 1rem;
    }

    textarea {
        height: 15rem;
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

    button {
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
        transition: all 300ms ease-in-out;
    }

    button:focus,
    button:active {
        background-color: transparent;
        color: white;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
        border: solid 1px steelblue;
        margin-top: 1rem;
        margin-bottom: 5rem;
        padding: 0.8rem 5rem;
        border-radius: 0;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        outline: none;
    }

    button:hover {
        background-color: transparent;
        transform: scale(0.9);
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.1);
        border: solid 1px steelblue;
    }

    @media only screen and (max-width: 720px) {
        .form-control {
            width: 30rem;
        }
    }

    @media only screen and (max-width: 570px) {
        .form-control {
            width: 20rem;
        }

        textarea {
            height: 12rem;
        }

        button {
            padding: 0.5rem 3rem;
        }

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
    @media only screen and (max-width: 350px) {
        .form-control {
            width: 15rem;
        }
    }
`

export const Contact = () => {
    const initialFormData = Object.freeze({
        username: '',
        email: '',
        message: '',
    })

    let check = true

    const checkFieldsArePopulated = () => {
        const inputFields = document.querySelectorAll('.form-control')

        inputFields.forEach((field) => {
            if (field.value.length < 1) {
                check = false
                return
            }
        })
    }

    const clearFields = () => {
        const inputFields = document.querySelectorAll('.form-control')

        inputFields.forEach((field) => {
            field.value = ''
        })
    }

    const [formData, updateFormData] = React.useState(initialFormData)

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim(),
        })
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs
            .send(serviceID, templateId, variables)
            .then((res) => {
                // console.log('Email successfully sent!')
            })
            .catch((err) => console.error('There has been an Error.', err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        checkFieldsArePopulated()
        if (check === false) {
            alert('Fill out all fields before submitting.')
            return
        } else {
            clearFields()
            alert(`Thank you for your message. Your query has been forwarded.`)
            const templateId = 'template_b2hayo3'
            const serviceID = 'service_85pipfk'
            sendFeedback(serviceID, templateId, {
                from_name: formData.name,
                message_html: formData.message,
                email: formData.email,
            })

            updateFormData({
                email: '',
                message: '',
                name: '',
            })
        }
    }

    return (
        <Styles>
            <Container fluid>
                <Row>
                    <Col className={'d-flex justify-content-center'}>
                        <div className={'title-container'}>
                            <div className={'line-left'}>
                                <div className={'left-block'}></div>
                            </div>
                            <h1 className={'section-title'}>CONTACT</h1>
                            <div className={'line-right'}>
                                <div className={'right-block'}></div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col
                        sm={12}
                        xs={12}
                        className={'d-flex justify-content-center'}
                    >
                        <Form>
                            <Form.Group
                                onChange={handleChange}
                                as={Col}
                                controlId="formGridName"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    name="name"
                                    type="name"
                                    placeholder="Name"
                                />
                            </Form.Group>

                            <Form.Group
                                onChange={handleChange}
                                as={Col}
                                controlId="formGridEmail"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group
                                onChange={handleChange}
                                as={Col}
                                id="formGridQuery"
                            >
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    name="message"
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>

                            <Button
                                onClick={handleSubmit}
                                variant="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}
