import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, input } from 'react-bootstrap';
import './Login.css'

export const Login = () => {
    return (
        <div className='login-body'>
            <div className='center-item'>
            <h1>Login User</h1>
            </div>
            <h5>User Email</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <h5>Password</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className='center-item'>
               <Button>Login</Button>
            </div>
            <a href=''>Sign In</a>
        </div>
    )
}
