import React from 'react'

import Carousel from 'components/layout/Carousel'
import Container from 'components/layout/Container'
import Col from 'components/layout/Col'
import Row from 'components/layout/Row'
import CardsDisplay from 'components/layout/CardsDisplay'
import PostersDisplay from 'components/layout/PostersDisplay'
import Ribbon from 'components/layout/Ribbon'

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

            <Row className="bg-gray-700">
                <Col padding="0px">
                    <Container
                        fluid
                        style={{
                            marginTop: '2rem',
                        }}
                    >
                        <Row>
                            <Col>
                                <h2>Featured</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <PostersDisplay />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col padding="0px">
                    <Ribbon />
                </Col>
            </Row>
        </Container>
    )
}

export default Content
