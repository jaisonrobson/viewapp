import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line jsx-a11y/alt-text
const StyledImage = styled(({ objectFit, width, ...props }) => <img {...props} />)`
    ${({ objectFit }) => objectFit ? `object-fit: ${objectFit};` : ''}
    ${({ width }) => width ? `width: ${width};` : ''}
`

const Image = (props) => <StyledImage alt="" {...props} />

export default Image
