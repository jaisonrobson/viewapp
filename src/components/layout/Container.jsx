import React from 'react'
import styled from 'styled-components'
import { Container as ReactstrapContainer } from 'reactstrap'

const StyledContainer = styled(({ padding, ...props }) => <ReactstrapContainer {...props} />)`
    ${({ padding }) => padding ? `padding: ${padding};` : ``}
`

const Container = (props) => <StyledContainer {...props} />

export default Container
