import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Container,
} from 'reactstrap'

const StyledNavbar = styled(({ backgroundColor, ...props }) => <Navbar {...props} />)`
    transition-timing-function: ease-in;
    transition-duration: 0.5s;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${({ backgroundColor }) => backgroundColor || "#00000020"};
`

const StyledNavLink = styled(({ textShadow, color, ...props }) => <NavLink {...props} />)`
    color: ${({ color }) => color || 'blue'};
    text-shadow: ${({ textShadow }) => textShadow || 'none'};

    &:hover,
    &:active,
    &:focus {
        color: #FFFFFF;
    }
`

const MainNavbar = () => {
    const [isShow, setIsShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toogle = () => setIsOpen(!isOpen)

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY > 100) {
                setIsShow(true)
            } else setIsShow(false)
        }

        window.addEventListener("scroll", scroll)

        return () => window.removeEventListener("scroll", scroll)
    }, [])

    return (
        <StyledNavbar
            id="mainbar"
            fixed="top"
            expand="sm"
            backgroundColor={isShow && "#111"}
        >
            <NavbarBrand
                href="/"
                style={{
                    color: '#FFF',
                    fontFamily: "'Monoton', cursive",
                    fontWeight: '1',
                    fontSize: '25px',
                    letterSpacing: '3px',
                    textShadow: '2px 2px 5px #000',
                }}
            >
                View
            </NavbarBrand>

            <NavbarToggler
                onClick={toogle}
                style={{
                    color: `${isShow ? '#FFFFFFA1' : '#111'}`,
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </NavbarToggler>

            <Collapse isOpen={isOpen} navbar>
                <Container>
                    <Nav navbar className="justify-content-center">
                        <NavItem>
                            <StyledNavLink
                                href="/"
                                textShadow="1px 1px 3px #000"
                                color="#FFFFFFA1"
                            >
                                Movies
                            </StyledNavLink>
                        </NavItem>

                        <NavItem>
                            <StyledNavLink
                                href="/"
                                textShadow="1px 1px 3px #000"
                                color="#FFFFFFA1"
                            >
                                Series
                            </StyledNavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Collapse>

            <UncontrolledDropdown inNavbar>
                <DropdownToggle
                    nav
                    style={{
                        color: '#FFFFFFA1',
                        textShadow: "1px 1px 3px #000",
                    }}
                >
                    <img
                        src={process.env.PUBLIC_URL + '/images/userNoAvatar.png'}
                        alt=""
                        className="rounded-circle"
                        style={{
                            objectFit: 'contain',
                            width: '35px',
                        }}
                    />

                    <span
                        style={{
                            marginLeft: '10px',
                            marginRight: '5px',
                        }}
                    >
                        User
                    </span>

                    <FontAwesomeIcon
                        icon={faCaretDown}
                        style={{
                            paddingTop: '1px',
                        }}
                    />
                </DropdownToggle>

                <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </StyledNavbar>
    )
}

export default MainNavbar