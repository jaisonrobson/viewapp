import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import Carousel from '../../components/layout/Carousel'

const Content = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel />
                </Col>
            </Row>
        </Container>
    )
}

export default Content
