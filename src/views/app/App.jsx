import React from 'react'
import _ from 'lodash/fp'

import LoremIpsum from '../../data/LoremIpsum'
import MainNavbar from '../../components/MainNavbar/MainNavbar'



const App = () => {
    const lorem = _.times((i) => <p key={i}><LoremIpsum /></p>)

    return (
        <div>
            <MainNavbar />

            {lorem(50)}
        </div>
    )
}

export default App