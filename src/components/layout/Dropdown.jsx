import React, { useContext } from 'react'
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
    const { isOpen, setIsOpen } = useContext(FlagContext)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <UncontrolledDropdown
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
