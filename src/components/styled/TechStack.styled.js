import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Styles = styled.div`
    .teckstack-title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
    }

    .teckstack-title {
        margin: 3rem 0rem;
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        z-index: 100;
        background-color: steelblue;
        color: white;
        width: 30rem;
        padding: 2rem;
        width: fit-content;
        min-width: fit-content;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
        user-select: none;
    }

    .teckstack-line-right {
        height: 1px;
        width: 100px;
        background-image: linear-gradient(
            to left,
            rgba(70, 130, 180, 0),
            rgba(70, 130, 180, 1)
        );
    }

    .teckstack-line-left {
        width: 100px;
        height: 1px;
        background-image: linear-gradient(
            to right,
            rgba(70, 130, 180, 0),
            rgba(70, 130, 180, 1)
        );
    }

    .techstack-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
    }

    .list-group-item,
    .card-header {
        text-align: center;
    }

    .card-header {
        user-select: none;
        background-color: #333333;
        color: white;
    }
`

export const TechStack = () => <Styles></Styles>
