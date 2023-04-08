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
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-4'></div>
            <div class='col-4 vertical-center'>
                <div class="card">
                    <div class="card-body">
                        <div class='form'>
                        <h3 class='text-center'>Profile</h3>
                        
                    </div>
                    </div>
                </div>
                
            </div>
            <div class='col-4'></div>
        </div>
    </div>
  )
}

export default Login