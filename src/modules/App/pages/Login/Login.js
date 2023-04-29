import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'



const Login = () => {
const [user,setUser] = useState({
    username:'',
    password:''
})

    const navigate = useNavigate();
    const gotoSignIn = () => {
        navigate('signIn')
    }
    const loginHandle = (keyName,keyValue) => {
        const update = {...user}
        update[keyName]=keyValue
        setUser(update)
    }
    const submitHandle = async () => {
        let item = {...user}
        const r = await fetch("https://dummyjson.com/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item),     
        }).then((response)=>response.json())
        .then((res)=>{
            console.log("res",res)
        })
    }
    return (
        <div className='login-body'>
            <div className='center-item'>
                <h1>Login User</h1>
            </div>
            <h5>User Email</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" 
                value={user.username}
                onChange={(e)=>loginHandle("username",e.target.value)}
                />
            </div>
            <h5>Password</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" 
                value={user.password}
                onChange={(e)=>loginHandle("password",e.target.value)}
                />
            </div>
            <div className='center-item'>
                <Button onClick={submitHandle}>Login</Button>
            </div>
            <Button onClick={gotoSignIn}>Sign In</Button>
        </div>
    )
}

export default Login;