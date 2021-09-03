import React from 'react'
import styled from 'styled-components'
import { NavLink as ReactstrapNavLink } from 'reactstrap'

const StyledNavLink = styled(({ textShadow, color, ...props }) => <ReactstrapNavLink {...props} />)`
    color: ${({ color }) => color || 'blue'};
    text-shadow: ${({ textShadow }) => textShadow || 'none'};

    &:hover,
    &:active,
    &:focus {
        color: #FFFFFF;
    }
`

const NavLink = (props) => {
    return (
        <StyledNavLink
            href="/"
            textShadow="1px 1px 3px #000"
            color="#FFFFFFA1"
            {...props}
        />
    )
}

export default NavLink
