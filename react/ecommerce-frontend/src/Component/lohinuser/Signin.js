import React, { useState } from 'react'
import './signup_signin.css'
import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signinUser, signupUser } from '../../Redux/Action/loginAction'

export default function Signin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const registerHandle = (event) => {
        event.preventDefault()
        const obj = { 'username': userName, 'email': email, 'password': password }
        dispatch(signupUser(obj , navigate))
    }

    const loginHandle = (event) => {
        event.preventDefault()
        const obj = { 'email': loginEmail, 'password': loginPassword }
        dispatch(signinUser(obj,navigate))
    }

    return (
        <div className='bg'>
            <div className="main">
                <input className='userinput' type="checkbox" id="chk" aria-hidden="true"/>
                <div className="login">
                    <label className='userlable' htmlFor="chk" aria-hidden="true">Login</label>
                    <input className='userinput' type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                    <input className='userinput' type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    <button className="userbtn" onClick={loginHandle}>Login</button>
                </div>
                <div className="signup">
                    <label className='userlable' htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input className='userinput' type="text" placeholder="User name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <input className='userinput' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='userinput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="userbtn" onClick={registerHandle}>Sign up</button>
                </div>

            </div>

        </div>
    )
}
