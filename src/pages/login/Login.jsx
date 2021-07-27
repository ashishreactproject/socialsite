import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
// import { Grid } from '@material-ui/core'
export default function Login() {
    return (
        // <Grid xs={12} sm={6} md={4} lg={3} >
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">Socialbook</h3>
                        <span className="loginDesc">
                            Connect with friends and the world around you on socialbook.
                    </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input placeholder="Email" type="Email" className="loginInput" />
                            <input placeholder="Password" type="Password" className="loginInput" />
                            <Link to="/home" className="linkLoginButton">
                                <button className="loginButton">Log In</button>
                            </Link>
                            <span className="loginForgot">Forgot Password?</span>
                            <Link to="/register" className="linkLoginRegisterButton1">
                                <button className="loginRegisterButton">Create a New Account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        // </Grid>

    )
}
