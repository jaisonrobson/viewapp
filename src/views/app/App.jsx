import React from 'react'
import _ from 'lodash/fp'

import LoremIpsum from '../../data/LoremIpsum'
import Top from '../top/Top'



const App = () => {
    const lorem = _.times((i) => <p key={i}><LoremIpsum /></p>)

    return (
        <div>
            <Top />

            {lorem(50)}
        </div>
    )
}

export default App