import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./auth.css"
function Login() {
    const [email_id,setEmailid]=useState('')
    const [password,setPassword]=useState('')

    const loginUser =() =>{
        console.log("Form Submitted")
        console.log(email_id)
        console.log(password)
        setEmailid('')
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
                        <h3 className='text-center'>Login Page</h3>
                        <form>
                            <Form.Group className='my-3'>
                                
                                <Form.Control type="text"
                                    placeholder="Email Id"
                                    value={email_id}
                                    name="email_id"
                                    onChange={(e)=>{setEmailid(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group className='my-3'>
                                
                                <Form.Control type="password"
                                    placeholder="Your password"
                                    value={password}
                                    name="password"
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group className='text-center'>
                                <Button as="sub" variant="primary" className="btn btn-primary sub-btn btn-block loginbtn" onClick={loginUser}>Login</Button>
                            </Form.Group>
                            <Form.Group className='mt-3 px-3'>
                                <small>Do not have an account? <Link to ='/signup' className='rm_ud px-3'>Create one</Link></small>
                            </Form.Group>
                        </form>
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