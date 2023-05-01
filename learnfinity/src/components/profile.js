import React, { useState, useEffect } from 'react';
import profile from "../images/default.png"
import pf from "../images/prof_def.png"
import expand from "../images/expand.png"
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { ReactSession } from 'react-client-session';
import axios from 'axios';
export default function Profile_comp() {

    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://10.17.6.4/user', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
    }, [])
    const logoutUser = () => {
        ReactSession.set("access_token", null);
        alert("Logged Out Successfully")
        navigate("/");
        window.location.reload()
    }
    return (
        <div class="col-1">
            <a type="button" className='navbar-brand nav-logo' data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                <img src={profile} alt='CAIC' width='40' height='40' />
                <img src={expand} alt='CAIC' width='40' height='40' />
            </a>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header text-center row">
                            <div class="col-10">
                                <div class="profile">
                                    <h5 class="modal-title " id="exampleModalLabel">Profile</h5>
                                </div>
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="text-center">
                                <img src={pf} alt='CAIC' width='100' height='100' />
                            </div>
                            <form className='px-2'>
                                <div class="form-group email-form text-center">
                                    {user.name}
                                </div>
                                <div class="form-group email-form text-center">
                                    {user.email_id}
                                </div>

                                <div class="form-group form-check">
                                    <div class="row py-2 text-center">

                                        <Form.Group className='text-center'>
                                            <Button as="sub" variant="primary" class="btn btn-primary btn-sm " className="btn btn-primary  loginbtn" onClick={logoutUser}>Logout</Button>
                                        </Form.Group>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}