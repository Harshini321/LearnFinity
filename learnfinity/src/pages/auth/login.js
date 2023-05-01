import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { ReactSession } from 'react-client-session';
import axios from 'axios';
import "./auth.css"

function Login() {
    ReactSession.setStoreType("localStorage");
    const [email_id, setEmailid] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookie] = useCookies(['access_token']);
    const [user, setUser] = useState({})
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    useEffect(() => {
        axios.get('http://10.17.6.4/user', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
    }, [])
    const navigate = useNavigate()
    const loginUser = () => {
        console.log("Form Submitted")
        console.log(email_id)
        console.log(password)
        setEmailid('')
        setPassword('')
        axios.post('http://10.17.6.4/signin', {
            "email_id": email_id,
            "password": password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            if (response.data.status_code != 200) {
                alert(response.data.message)
            } else {
                ReactSession.set("access_token", response.data.access_token)
                setCookie('access_token', response.data.access_token, { path: '/' });
                alert("Login Successful")
                if (response.data.is_Prof) {
                    navigate("/admin")
                } else {
                    navigate("/dashboard")
                }
            }
        }).catch((err) => {
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
                                <h3 className='text-center mt-3 mb-3'>Login Page</h3>
                                <form>
                                    <Form.Group className='my-3 mt-3'>

                                        <Form.Control type="text"
                                            placeholder="Email Id"
                                            value={email_id}
                                            name="email_id"
                                            onChange={(e) => { setEmailid(e.target.value) }}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group className='my-3'>

                                        <Form.Control type="password"
                                            placeholder="Your password"
                                            value={password}
                                            name="password"
                                            onChange={(e) => { setPassword(e.target.value) }}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group className='text-center mt-3 mb-3'>
                                        <Button as="sub" variant="primary" class="btn btn-primary btn-sm " className="btn btn-primary  loginbtn" onClick={loginUser}>Login</Button>
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