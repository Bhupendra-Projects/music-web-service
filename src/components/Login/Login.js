import React from 'react'
import './Login.css'
import { LoginUrl } from '../Spotify/Spotify'

function Login() {
    return (
        <div className="login">
            <img src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png" alt="spotify logo"/>
            <a href={LoginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
