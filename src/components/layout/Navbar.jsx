import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {
    Container,
    Nav,
    Navbar as ReactstrapNavbar,
    NavItem,
} from 'reactstrap'

import NavbarBrand from './NavbarBrand'
import NavbarCollapsible from './NavbarCollapsible'
import NavLink from './NavLink'
import Dropdown from './Dropdown'

const StyledNavbar = styled(({ backgroundColor, ...props }) => <ReactstrapNavbar {...props} />)`
    transition-timing-function: ease-in;
    transition-duration: 0.5s;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${({ backgroundColor }) => backgroundColor || "#00000020"};
`

const Navbar = () => {
    const [isShow, setIsShow] = useState(false)


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
            <NavbarBrand>View</NavbarBrand>

            <NavbarCollapsible>
                <NavbarCollapsible.Toggler color={isShow ? '#FFFFFFA1' : '#111'} />

                <NavbarCollapsible.Collapse navbar>
                    <Container>
                        <Nav navbar className="justify-content-center">
                            <NavItem>
                                <NavLink>
                                    Movies
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink>
                                    Series
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </NavbarCollapsible.Collapse>
            </NavbarCollapsible>

            <Dropdown>
                <Dropdown.Toggler
                    nav
                    color="#FFFFFFA1"
                    hoverColor="#FFF"
                    textShadow="1px 1px 3px #000"
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
                </Dropdown.Toggler>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        Option 1
                    </Dropdown.Item>

                    <Dropdown.Item>
                        Option 2
                    </Dropdown.Item>

                    <Dropdown.Item divider />

                    <Dropdown.Item>
                        Option 3
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </StyledNavbar>
    )
}

export default Navbar