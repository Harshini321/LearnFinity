import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
// import { ReactSession } from 'react-client-session';
import "./auth.css"
import axios from 'axios'
function Login() {
    // ReactSession.setStoreType("localStorage");
    const [email_id,setEmailid]=useState('')
    const [password,setPassword]=useState('')
    const [cookies, setCookie] = useCookies(['access_token']);
    const navigate = useNavigate()
    const loginUser =() =>{
        console.log("Form Submitted")
        console.log(email_id)
        console.log(password)
        setEmailid('')
        setPassword('')
        axios.post('http://localhost:5000/signin', {
            "email_id" : email_id,
            "password" : password
        },{headers: {
                'Content-Type': 'application/json',
            }}, {withCredentials: true}).then((response)=>{
            console.log(response.data.access_token)
            setCookie('access_token', response.data.access_token, { path: '/' });
            alert("Login Successful")
            navigate("/dashboard")
        }).catch((err)=>{
            console.log(err)
            alert("Login Failed")
        }
        )
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