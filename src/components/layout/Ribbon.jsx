import React from 'react'
import styled from 'styled-components'

import ViagemInacreditavel from 'images/ViagemInacreditavel.jpg'

const StyledWrapper = styled(({ backgroundImage, ...props }) => <div {...props} />)`
    background-image: url(${({ backgroundImage }) => backgroundImage});
    -webkit-background-size: 120%;
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center;

    width: 100%;
    height: 600px;
`

const Ribbon = ({ image = ViagemInacreditavel, ...props }) => {
    return (
        <StyledWrapper backgroundImage={image} {...props} />
    )
}

export default Ribbon
