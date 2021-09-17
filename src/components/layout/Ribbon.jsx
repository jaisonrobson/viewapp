import React from 'react'
import styled from 'styled-components'

import ViagemInacreditavel from 'images/ViagemInacreditavel.jpg'

const StyledWrapper = styled.div`
    position: relative;
`

const StyledRibbon = styled(({ backgroundImage, ...props }) => <div {...props} />)`
    background-image: url(${({ backgroundImage }) => backgroundImage});
    -webkit-background-size: 200%;
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: center;

    width: 100%;
    height: 600px;
`

const StyledOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom,rgba(0,0,0,.5) 10%,rgba(0,0,0,.3) 100%);
`

const Ribbon = ({ image = ViagemInacreditavel, ...props }) => {
    return (
        <StyledWrapper>
            <StyledOverlay />

            <StyledRibbon backgroundImage={image} {...props} />
        </StyledWrapper>
    )
}

export default Ribbon
