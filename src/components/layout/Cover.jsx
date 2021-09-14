import React from 'react'
import styled from 'styled-components'

import Image from 'components/layout/Image'
import Container from 'components/layout/Container'
import Row from 'components/layout/Row'
import Col from 'components/layout/Col'

const Wrapper = styled.div`
    position: relative;
`

const CaptionOverlay = styled(({ width, height, ...props }) => <div {...props} />)`
    position: absolute;
    z-index: 2;
    ${({ width }) => width ? `width: ${width};` : ''}
    ${({ height }) => height ? `height: ${height};` : ''}

    &:hover {
        background-color: #ffffff15;
    }
`

const StyledH4 = styled.h4`
    margin: 0;
    color: #FFFFFF;
`

const StyledP = styled.p`
    margin: 0;
    color: #FFFFFFA9;
`

const Cover = ({ title, caption, image, width, height, ...props }) => {
    return (
        <Wrapper>
            <CaptionOverlay width={width} height={height}>
                <Container
                    padding="0"
                    width="100%"
                    height="100%"
                    display="flex"
                    alignItems="flex-end"
                >
                    <Row margin="0">
                        <Col
                            padding="0"
                            marginLeft="1rem"
                            marginBottom="1rem"
                            width={`calc(${width} - 1rem)`}
                            overflowWrap="break-word"
                        >
                            <StyledH4>{title}</StyledH4>
                            <StyledP>{caption}</StyledP>
                        </Col>
                    </Row>
                </Container>
            </CaptionOverlay>

            <Image
                src={image}
                width={width}
                height={height}
                objectFit="cover"
                zIndex="1"
            />
        </Wrapper>
    )
}

export default Cover
