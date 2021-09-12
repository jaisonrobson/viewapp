import React from 'react'
import { Container, Row } from 'reactstrap'

import Carousel from 'components/layout/Carousel'
import BoardDisplay from 'components/layout/BoardDisplay'
import Col from 'components/layout/Col'

const Content = () => {
    return (
        <Container fluid>
            <Row>
                <Col padding="0px">
                    <Carousel />
                </Col>
            </Row>

            <Row>
                <Col padding="0px">
                    <BoardDisplay />
                </Col>
            </Row>
        </Container>
    )
}

export default Content
