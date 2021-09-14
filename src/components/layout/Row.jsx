import React from 'react'
import styled from 'styled-components'
import { Row as ReactstrapRow } from 'reactstrap'

const StyledRow = styled(({ padding, margin, ...props }) => <ReactstrapRow {...props} />)`
    ${({ padding }) => padding ? `padding: ${padding};` : ``}
    ${({ margin }) => margin ? `margin: ${margin};` : ``}
`

const Row = (props) => <StyledRow {...props} />

export default Row
