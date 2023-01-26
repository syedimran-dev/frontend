import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import httpsClient from '../../httpsClient'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPasswrode] = useState("")
    const loginUser = async (e) => {
        e.preventDefault();
        console.log(email, password)
        const resp = await httpsClient.post('//localhost:5000/login', {email, password})
        console.log(resp.data)
    }
    return (
        <div className="container height-login">
            <div className="row h-100 align-items-center">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="card p-2 p-md-3 p-lg-4">
                        <h2 className="text-center text-dark mb-4">Register Form</h2>
                        <form>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="email" name='email' value={email} placeholder='Enter Your Email' className='form-control' onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="password" name='password' value={password} placeholder='Enter Your Password' className='form-control' onChange={(e) => { setPasswrode(e.target.value) }} />
                                </div>
                            </div>
                        </form>
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-success ' onClick={loginUser}>Login Here</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <Link className='me-2'>Forgotten Password</Link>
                                <Link to={'/signup'}>Don't have an Account?SignUp here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login