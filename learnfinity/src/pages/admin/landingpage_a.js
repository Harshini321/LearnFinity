import React from 'react';
import "./admin.css"
import logo from '../../images/lf_logo.png';
import profile from "../../images/default2.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand2.png"
import axios from 'axios';
import Choose_course from './admin_components/choose_course';
import { useState, useEffect } from 'react';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import Profile_comp from '../../components/profile';
import 'react-cookie'
export default function Landingpage_a() {
    const history = useNavigate();
    function detailCourse(id) {
        history(`/dashboard/${id}`);
    }
    const [courseList, setCourseList] = useState([]);
    const [user, setUser] = useState({})

    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://10.17.6.4/user', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                setUser(res.data)
            })
    }, [])
    const logoutUser = () => {
        ReactSession.set("access_token", null);
        alert("Logged Out Successfully")
        navigate("/");
    }
    useEffect(() => {
        axios.get('http://10.17.6.4/user', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                setUser(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get('http://10.17.6.4/courses', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                // console.log(res.data.courses)
                // console.log("courselist")
                setCourseList(res.data.courses)
            })
    }, [])
    return (
        <div >
            <div class='container-fluid top-l'>
                <div class='row'>
                    <div class='col-2 pt-3 mt-2'>
                        <a class='navbar-brand nav-logo' href='/'>
                            <img src={logo} alt='CAIC' width='100' height='60' />
                        </a>
                    </div>
                    <div class='col-8 pt-3 mt-3'>
                        <h2 class='head'>Welcome back , {user.name} !</h2>
                    </div>
                    {/* <Profile_comp></Profile_comp> */}
                    <div class="col-2 pt-3 mt-3">
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
                    {/* <div class='col-2 pt-3 mt-3'>
                        <a type="button" class='navbar-brand nav-logo' data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                            <img src={profile} alt='CAIC' width='35' height='35' />
                            <img src={expand} alt='CAIC' width='30' height='30' />
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
                                        <form class='px-2'>
                                            <div class="form-group email-form">
                                                <input type="email" class="form-control py-2" id="exampleInputEmail2" placeholder="Username"></input>
                                            </div>
                                            <div class="form-group email-form">
                                                <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                            </div>

                                            <div class="form-group form-check">
                                                <div class="row py-2 text-center">
                                                    <div class="col-6">
                                                        <label class="form-check-label" for="exampleCheck1">Change Password</label>
                                                    </div>
                                                    <div class="col-4">
                                                        <label class="form-check-label" for="exampleCheck1">Log Out</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div class='row mn-header'>
                    <h1 class='text-center mn-header-h1'>CHOOSE COURSE</h1>
                </div>

                <div class='row co-row'>

                    {courseList.map((course, key) => {
                        return <Choose_course
                            key={key}
                            name={course.name}
                            description={course.description}
                            id={course.id}
                            semester={course.semester}
                            year={course.year}
                            credits={course.credits}
                            type={course.type}
                            insti_id={course.insti_id}
                            slot_id={course.slot_id}
                            onDetail={detailCourse}
                        ></Choose_course>
                    })}

                </div>
            </div>
            <div class='container-fluid bottom-l'></div>
        </div>
    );
}