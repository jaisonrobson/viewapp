import React from 'react'
import styled from 'styled-components'
import { Row as ReactstrapRow } from 'reactstrap'

const StyledRow = styled(({ padding, margin, boxShadow, ...props }) => <ReactstrapRow {...props} />)`
    ${({ padding }) => padding ? `padding: ${padding};` : ``}
    ${({ margin }) => margin ? `margin: ${margin};` : ``}
    ${({ boxShadow }) => boxShadow ? `box-shadow: ${boxShadow};` : ``}
`

const Row = (props) => <StyledRow {...props} />

export default Row
