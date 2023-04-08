import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./auth.css"
function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const loginUser =() =>{
        console.log("Form Submitted")
        setUsername('')
        setPassword('')
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 vertical-center'>
                <div class="card">
                    <div class="card-body">
                        <div className='form'>
                        <h3 className='text-center'>Profile</h3>
                        
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='col-4'></div>
        </div>
    </div>
  )
}

export default Login