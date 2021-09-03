import React from 'react'
import _ from 'lodash/fp'

import LoremIpsum from '../../data/LoremIpsum'
import Navbar from '../../components/layout/Navbar'



const App = () => {
    const lorem = _.times((i) => <p key={i}><LoremIpsum /></p>)

    return (
        <div>
            <Navbar />

            {lorem(50)}
        </div>
    )
}

export default App