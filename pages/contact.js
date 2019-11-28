import React from 'react'
import Router from 'next/router'

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div>Welcome to Contact Page</div>
                <button onClick={() => Router.push('/about')}>Click me</button>
            </div>
            
        )
    }
}


export default Contact