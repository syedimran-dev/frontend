import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="container height-login">
            <div className="row h-100 align-items-center">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="card p-2 p-md-3 p-lg-4">
                        <h2 className="text-center text-dark mb-4">Register Form</h2>
                        <form>
                        <div className="row mb-3">
                                <div className="col">
                                    <input type="text" name='username' placeholder='Enter Username' className='form-control' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="email" name='email' placeholder='Enter Your Email' className='form-control' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="password" name='password' placeholder='Enter Your Password' className='form-control' />
                                </div>
                            </div>
                        </form>
                        <div className="row mb-3">
                            <div className="col">
                                <button className='btn btn-success '>Register Here</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <Link to={'/'}>Already have an Account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp