import React, { useState } from 'react'
import styled from 'styled-components'

import Container from 'components/layout/Container'
import Row from 'components/layout/Container'
import Col from 'components/layout/Col'
import Cover from 'components/layout/Cover'

import AcordandoBem from 'images/AcordandoBem.jpg'
import AVidaEAMorte from 'images/AVidaEAMorte.jpg'
import AProvaDeBafometro from 'images/AProvaDeBafometro.jpg'
import DoceJuventude from 'images/DoceJuventude.jpg'
import EsplendorDaNatureza from 'images/EsplendorDaNatureza.jpg'

const StyledHorizontalScrollItem = styled(({ marginLeft, marginRight, itemSize, ...props }) => <div {...props} />)`
    flex: 0 0 ${({ itemSize }) => itemSize ? itemSize : 'auto'};
    ${({ marginLeft }) => marginLeft ? `margin-left: ${marginLeft};` : ''}
    ${({ marginRight }) => marginRight ? `margin-right: ${marginRight};` : ''}
`

const StyledHorizontalScroll = styled.div`
    --webkit-overflow-scrolling: touch;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

const payload = [
    {
        src: AcordandoBem,
        genre: 'Casual',
        title: 'Waking up Well',
    },
    {
        src: AVidaEAMorte,
        genre: 'Action',
        title: 'Life and Death',
    },
    {
        src: AProvaDeBafometro,
        genre: 'Action',
        title: '2 Fast for You',
    },
    {
        src: DoceJuventude,
        genre: 'Casual',
        title: 'A long time ago',
    },
    {
        src: EsplendorDaNatureza,
        genre: 'Nature',
        title: 'Colors of Nature',
    },
]

const HorizontalScroll = ({ items: itemsProp = payload }) => {
    const [items,] = useState(itemsProp)

    return (
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
                    <StyledHorizontalScroll>
                        {items.map(({ title, genre, src }, index) => (
                            <StyledHorizontalScrollItem
                                key={src}
                                marginLeft={index !== 0 ? '2rem' : '0'}
                            >
                                <Cover
                                    image={src}
                                    title={title}
                                    caption={genre}
                                    width="380px"
                                    height="250px"
                                />
                            </StyledHorizontalScrollItem>
                        ))}
                    </StyledHorizontalScroll>
                </Col>
            </Row>
        </Container >
    )
}

export default HorizontalScroll
