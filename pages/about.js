import React from 'react'
import Router from 'next/router'


class About extends React.Component {
    handleRouteStart = url => {
        // console.log('Start', url)
    }

    handleRouteChangeComeplete = url => {
        // console.log('Complete', url)
    }

    //brforePopState only activates when you go back to the specific component
    componentDidMount() {
        // Router.beforePopState(params => {
        //     console.log('beforePopState',params)
        //     //params.url
        //     //params.as
        //     //params.options

        //     if(params.as === '/contact') {
        //         window.location.href = '/whatever'
        //         We could also use Router.replace('/whatever)
        //         return false
        //     }

        //     return true

        // })


        // ====Router Events====
        // console.log(Router.events)

        
        //The first argument has to be a string that references the name of the function that you 
        //are trying to run
        Router.events.on('routeChangeStart', this.handleRouteStart)
        Router.events.on('routeChangeComplete', this.handleRouteChangeComeplete)
    }
    
    render() {
        return (
            <div>
                <div>Welcome to About Page</div>
                <button onClick={() => Router.push('/contact')}>Click me</button>
            </div>
            
        )
    }
}


export default About