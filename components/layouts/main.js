import React from 'react'
import Header from './header.js'

const Main = props => {
    console.log('props from main layout', props)
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default Main