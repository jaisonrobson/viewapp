import React from 'react'
import _ from 'lodash/fp'
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap'

import LoremIpsum from '../../data/LoremIpsum'



const App = () => {
    const lorem = _.times((i) => <p key={i}><LoremIpsum /></p>)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">View</NavbarBrand>
            </Navbar>

            {lorem(50)}
        </div>
    )
}

export default App