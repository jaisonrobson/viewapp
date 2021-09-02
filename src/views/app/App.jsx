import React from 'react'
import LoremIpsum from '../../data/LoremIpsum'

import _ from 'lodash/fp'

const App = () => {
    const lorem = _.times(() => <p><LoremIpsum /></p>)

    return (
        <div>
            {lorem(50)}
        </div>
    )
}

export default App