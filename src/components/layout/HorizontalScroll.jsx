import React from 'react'
import styled from 'styled-components'

import Container from 'components/layout/Container'
import Row from 'components/layout/Container'
import Col from 'components/layout/Col'
import Cover from 'components/layout/Cover'

import AcordandoBem from 'images/AcordandoBem.jpg'

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

    
    &::-webkit-scrollbar {
        display: none;
    }
`

const payload = [
    {
        src: '',
        genre: '',
        title: '',
    },
]

const Example = (props) => (
    <Cover
        image={AcordandoBem}
        title="Titulo"
        caption="Genero"
        width="380px"
        height="250px"
        {...props}
    />
)

const HorizontalScroll = () => {
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
                    <StyledHorizontalScroll className="scrolling-wrapper-flexbox">
                        <StyledHorizontalScrollItem>
                            <Example />
                        </StyledHorizontalScrollItem>

                        <StyledHorizontalScrollItem marginLeft="2rem">
                            <Example />
                        </StyledHorizontalScrollItem>

                        <StyledHorizontalScrollItem marginLeft="2rem">
                            <Example />
                        </StyledHorizontalScrollItem>

                        <StyledHorizontalScrollItem marginLeft="2rem">
                            <Example />
                        </StyledHorizontalScrollItem>

                        <StyledHorizontalScrollItem marginLeft="2rem">
                            <Example />
                        </StyledHorizontalScrollItem>

                    </StyledHorizontalScroll>
                </Col>
            </Row>
        </Container >
    )
}

export default HorizontalScroll
