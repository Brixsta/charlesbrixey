import React from 'react'
import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export const Styles = styled.div`
    header {
        width: 100vw;
        height: 91vh;
        background-size: cover;
        position: relative;
        padding-top: 5rem;
    }
`

export const Header = () => (
    <Styles>
        <Container fluid>
            <Row>
                <Col sm={12} xs={12}>
                    <header
                        style={{
                            backgroundImage: `url("./images/header.png")`,
                        }}
                    ></header>
                </Col>
            </Row>
        </Container>
    </Styles>
)
