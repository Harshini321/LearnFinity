import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const loginUser =() =>{
        console.log("Form Submitted")
        setUsername('')
        setPassword('')
    }
  return (
    <div className='container'>
        <div className='form'>
            <h1>Login Page</h1>
            <form>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text"
                        placeholder="Your username"
                        value={username}
                        name="username"
                        onChange={(e)=>{setUsername(e.target.value)}}
                    ></Form.Control>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Your password"
                        value={password}
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    ></Form.Control>
                </Form.Group>
                
                <Form.Group>
                    <Button as="sub" variant="primary" onClick={loginUser}>Login</Button>
                </Form.Group>
                <Form.Group>
                    <small>Do not have an account? <Link to ='/signup'>Create one</Link></small>
                </Form.Group>
            </form>
        </div>
    </div>
  )
}

export default Login