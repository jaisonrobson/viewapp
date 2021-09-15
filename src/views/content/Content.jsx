import React from 'react'

import Carousel from 'components/layout/Carousel'
import Container from 'components/layout/Container'
import Col from 'components/layout/Col'
import Row from 'components/layout/Row'
import CardsDisplay from 'components/layout/CardsDisplay'


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
                    <Container
                        fluid
                        style={{
                            marginTop: '2rem',
                        }}
                    >
                        <Row>
                            <Col>
                                <h2>Releases</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <CardsDisplay />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Content
