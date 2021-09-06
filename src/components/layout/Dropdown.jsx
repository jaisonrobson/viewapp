import reactDom from 'react-dom'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

import { FlagContext, withFlagContext } from '../../contexts/withFlagContext'

const StyledDropdownToggle = styled(({ color, textShadow, hoverColor, ...props }) => <DropdownToggle {...props} />)`
    ${({ color }) => color ? `color: ${color};` : ''}
    ${({ textShadow }) => textShadow ? `text-shadow: ${textShadow};` : ''}

    &:hover,
    &:focus,
    &:active {
        ${({ hoverColor }) => hoverColor ? `color: ${hoverColor};` : ''}
    }
`

const Toggler = (props) => <StyledDropdownToggle {...props} />

const Menu = (props) => <DropdownMenu {...props} />

const Item = (props) => <DropdownItem {...props} />

const Dropdown = (props) => {
    const ref = useRef(null)
    const { isOpen, setIsOpen } = useContext(FlagContext)
    const toggle = () => setIsOpen(!isOpen)

    useEffect(() => {
        const over = () => setIsOpen(true)
        const leave = () => setIsOpen(false)

        const node = reactDom.findDOMNode(ref.current)

        node.addEventListener("mouseover", over)
        node.addEventListener("mouseleave", leave)

        return () => {
            node.removeEventListener("mouseover", over)
            node.removeEventListener("mouseleave", leave)
        }
    })

    return (
        <UncontrolledDropdown
            ref={ref}
            isOpen={isOpen}
            toggle={toggle}
            {...props}
        />
    )
}

Dropdown.Toggler = Toggler
Dropdown.Menu = Menu
Dropdown.Item = Item

export default withFlagContext(
    Dropdown,
    {
        flag: 'isOpen',
        initialValue: false,
    },
)
