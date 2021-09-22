import React from 'react'
import styled from 'styled-components'

import Container from 'components/layout/Container'
import Row from 'components/layout/Row'
import Col from 'components/layout/Col'

const StyledWrapper = styled.div`
    position: relative;
`

const StyledBackground = styled(({ backgroundImage, ...props }) => <div {...props} />)`
    background-image: url(${({ backgroundImage }) => backgroundImage});
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    width: 100%;
    height: 35rem;
    z-index: 1;
`

const StyledOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom,rgba(0,0,0,.6) 10%,rgba(0,0,0,.4) 100%);
    z-index: 2;
`

const StyledCaption = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
`

const StyledContainer = styled(Container)`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: inherit;
    width: inherit;
    flex-direction: column;
`

const initialPayload = {
    title: 'none',
    year: 0,
    duration: 0,
    genre: 'none',
    synopsis: 'none',
    imageSrc: null,
}

const Ribbon = ({ payload: { title, year, duration, genre, synopsis, imageSrc } = initialPayload, ...props }) => {
    return (
        <StyledWrapper>
            <StyledOverlay />

            <StyledCaption>
                <StyledContainer>
                    <Row>
                        <Col>
                            <h2 className="text-gray-100">{title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="text-gray-400" style={{ display: 'inline', marginRight: '2rem', paddingRight: '2rem', borderRight: '1px solid' }}>{year}</div>
                            <div className="text-gray-400" style={{ display: 'inline', marginRight: '2rem', paddingRight: '2rem', borderRight: '1px solid' }}>{duration} min</div>
                            <div className="text-gray-400" style={{ display: 'inline' }}>{genre}</div>
                        </Col>
                    </Row>
                    <Row marginTop="1rem">
                        <Col>
                            <p className="text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', textShadow: '2px 2px 5px #000' }}>
                                {synopsis}
                            </p>
                        </Col>
                    </Row>
                </StyledContainer>
            </StyledCaption>

            <StyledBackground backgroundImage={imageSrc} {...props} />
        </StyledWrapper>
    )
}

export default Ribbon
