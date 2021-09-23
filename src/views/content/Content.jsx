import React, { useContext } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Carousel from 'components/layout/Carousel'
import Container from 'components/layout/Container'
import Col from 'components/layout/Col'
import Row from 'components/layout/Row'

import CardsDisplay from 'components/custom/CardsDisplay'
import PostersDisplay from 'components/custom/PostersDisplay'
import MovieRibbon from 'components/custom/MovieRibbon'

import { ReducerContext } from 'contexts/withReducerContext'

import { randomSliceIntoNGivenValues } from 'util/array'


const StyledRow = styled((props) => <Row {...props} />)`
    box-shadow: 0 -10px 15px rgba(0,0,0,.1) inset;
`

const StyledCol = styled((props) => <Col {...props} />)`
    padding: 0px;
`

const StyledContainer = styled((props) => <Container {...props} />)`
    margin-top: 2rem;
`

const Content = () => {
    const { movies } = useContext(ReducerContext)

    const [
        cardsPayload,
        postersPayload,
        ribbonPayload,
    ] = randomSliceIntoNGivenValues(
        movies,
        [
            parseInt((movies.length - 1) / 2),
            parseInt(movies.length / 2),
            1,
        ],
    )

    return (
        <Container fluid>
            <Row>
                <StyledCol>
                    <Carousel />
                </StyledCol>
            </Row>

            <StyledRow>
                <StyledCol>
                    <StyledContainer fluid>
                        <Row>
                            <Col>
                                <h2 className="text-gray-100">Releases</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <CardsDisplay payload={cardsPayload} />
                            </Col>
                        </Row>
                    </StyledContainer>
                </StyledCol>
            </StyledRow>

            <StyledRow className="bg-gray-700">
                <StyledCol>
                    <StyledContainer fluid>
                        <Row>
                            <Col>
                                <h2 className="text-gray-100">Featured</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <PostersDisplay payload={postersPayload} />
                            </Col>
                        </Row>
                    </StyledContainer>
                </StyledCol>
            </StyledRow>

            <StyledRow>
                <StyledCol>
                    <MovieRibbon payload={_.head(ribbonPayload)} />
                </StyledCol>
            </StyledRow>
        </Container>
    )
}

export default Content
