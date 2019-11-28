import React from 'react'
import Main from '../components/layouts/main.js'
import axios from 'axios'
import Link from 'next/link'

import '../styles/base.scss'


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: props.user
        }
    }
    static async getInitialProps(context) {
        
        const data = await 
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        
        return {
            user: data
        }
        
    }

    render() {
        console.log(this.state.user)
        return (
            <>
                <Main>
                    <div>Welcome all</div>
                    <ul>
                        {this.state.user.map(each => (
                            <li>
                                {/* With QUERIES */}
                                {/* <Link href={`/users/profile?userId=${each.id}`}>
                                    {each.name}   
                                </Link> */}

                                {/* With PARAMS */}
                                {/* This is just to change the URL visually */}
                                {/* This needs a server side support in next.config.js*/}
                                <Link 
                                as={`/users/profile/${each.id}`} 
                                href={`/users/profile?userId=${each.id}`}>
                                    {each.name}   
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                </Main>
            </>
        )
    }
}


export default Home