import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {
    Container,
    Nav,
    NavItem,
} from 'reactstrap'

import Navbar from '../../components/layout/Navbar'
import NavbarBrand from '../../components/layout/NavbarBrand'
import NavbarCollapsible from '../../components/layout/NavbarCollapsible'
import NavLink from '../../components/layout/NavLink'
import Dropdown from '../../components/layout/Dropdown'

const Top = () => (
    <Navbar>
        {({ isShow }) => (
            <Fragment>
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
            </Fragment>
        )}
    </Navbar>
)

export default Top
