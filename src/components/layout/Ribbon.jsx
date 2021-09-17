import React from 'react'
import styled from 'styled-components'

import Container from 'components/layout/Container'
import Row from 'components/layout/Row'
import Col from 'components/layout/Col'

import ViagemInacreditavel from 'images/ViagemInacreditavel.jpg'


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

const Ribbon = ({ image = ViagemInacreditavel, ...props }) => {
    return (
        <StyledWrapper>
            <StyledOverlay />

            <StyledCaption>
                <Container style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    height: 'inherit',
                    width: 'inherit',
                    flexDirection: 'column',
                }}>
                    <Row>
                        <Col>
                            <h2 className="text-gray-100">Fafafa</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="text-gray-400" style={{ display: 'inline', marginRight: '2rem', paddingRight: '2rem', borderRight: '1px solid' }}>2021</div>
                            <div className="text-gray-400" style={{ display: 'inline', marginRight: '2rem', paddingRight: '2rem', borderRight: '1px solid' }}>165 min</div>
                            <div className="text-gray-400" style={{ display: 'inline' }}>Adventure</div>
                        </Col>
                    </Row>
                    <Row marginTop="1rem">
                        <Col>
                            <p className="text-gray-500" style={{ fontFamily: 'Poppins, sans-serif', textShadow: '2px 2px 5px #000' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet, est a pretium bibendum, tellus elit fringilla libero, et tempus neque lectus sit amet odio.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </StyledCaption>

            <StyledBackground backgroundImage={image} {...props} />
        </StyledWrapper>
    )
}

export default Ribbon
