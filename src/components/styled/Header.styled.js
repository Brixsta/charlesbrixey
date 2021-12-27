import React from 'react'
import styled from 'styled-components'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export const Styles = styled.div`
    header {
        width: 100vw;
        height: 100vh;
        background-size: cover;
        position: relative;
        padding-top: 5rem;
    }

    .reflection {
        width: 100vw;
        height: 100vh;
        background-size: cover;
        transform: rotate(-180deg) scaleX(-1);
        background-repeat: no-repeat;
        opacity: 0.5;
        position: absolute;
        filter: blur(1px);
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
                    <div
                        className={'reflection'}
                        style={{
                            backgroundImage: `url("./images/header.png")`,
                        }}
                    ></div>
                </Col>
            </Row>
        </Container>
    </Styles>
)
