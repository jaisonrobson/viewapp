import React from 'react'
import styled from 'styled-components'
import { Row as ReactstrapRow } from 'reactstrap'

const StyledRow = styled(({ padding, ...props }) => <ReactstrapRow {...props} />)`
    ${({ padding }) => padding ? `padding: ${padding};` : ``}
`

const Row = (props) => <StyledRow {...props} />

export default Row
