import React from 'react'
import styled from 'styled-components'
import { Col as ReactstrapCol } from 'reactstrap'

const StyledCol = styled(({ padding, ...props }) => <ReactstrapCol {...props} />)`
    ${({ padding }) => padding ? `padding: ${padding};` : ``}
`

const Col = (props) => <StyledCol {...props} />

export default Col
