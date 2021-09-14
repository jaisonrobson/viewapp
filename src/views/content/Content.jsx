import React from 'react'

import Carousel from 'components/layout/Carousel'
import HorizontalScroll from 'components/layout/HorizontalScroll'
import Container from 'components/layout/Container'
import Col from 'components/layout/Col'
import Row from 'components/layout/Row'

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
                    <HorizontalScroll />
                </Col>
            </Row>
        </Container>
    )
}

export default Content
