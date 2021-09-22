import './App.css'

import React from 'react'
import { withReducerContext } from 'contexts/withReducerContext'

import Top from '../top/Top'
import Content from '../content/Content'

const App = () => (
    <div className="app bg-primary">
        <Top />

        <Content />
    </div>
)

export default withReducerContext(App)