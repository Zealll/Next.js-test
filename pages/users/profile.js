import React from 'react'
import axios from 'axios'


const Profile = props => {
    console.log(props)

    return (
        <div>{props.profile.name}</div>
    )
}

Profile.getInitialProps = async context => {

    const data = await
    axios
    //QUERY VERSION
    // .get(`https://jsonplaceholder.typicode.com/users/${context.query.userId}`)

    //PAMAS VERSION
    .get(`https://jsonplaceholder.typicode.com/users/${context.query.userId}`)
    .then(res => res.data)

    // console.log('query',props)
    return {
        profile: data
    }
}


export default Profile