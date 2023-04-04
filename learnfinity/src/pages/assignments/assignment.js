
import React from 'react';
import './assignment.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import CourseCard from "../../components/course_card/coursecard"
import Footer from "../../components/footer/footer"
import profile from "../../images/default.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand.png"
import nt from "../../images/notes.png"
export default function assignment() {
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>Assignments</h2></div>
                <div class="col-1">
                    <a type="button" className='navbar-brand nav-logo'   data-bs-toggle="modal" data-bs-target="#exampleModal1" >
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
                                {/* <div class="text-center py-2">
                                    <button type="submit" class="btn btn-primary sub-btn btn-block">Register</button>
                                </div> */}
                                
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card my-3">
                <div class="card-body">
                    <div class="row px-3">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-3 icon-block">
                                    <img src={nt} alt='CAIC' width='40' height='40' />
                                </div>
                                <div class="col-9 pt-2">
                                    <h5>New Assignment</h5>
                                </div>
                            </div>

                        </div>
                        <div class="col-9">
                            <div class="row">
                                <div class="col-8 pt-2">
                                   
                                </div>
                                <div class="col-4 pt-2">
                                    <h6>Due Date - 15 March 2023, 11:59</h6>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col-12">
                        <p className='py-1 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col-2 px-3">
                            <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Submit
                            </button>
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-outline-primary signupbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Download
                            </button>
                        </div>
                    </div>
                    

                </div>
            </div>
            <div class="card my-3">
                <div class="card-body">
                    <div class="row px-3">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-3 icon-block">
                                    <img src={nt} alt='CAIC' width='40' height='40' />
                                </div>
                                <div class="col-9 pt-2">
                                    <h5>New Assignment</h5>
                                </div>
                            </div>

                        </div>
                        <div class="col-9">
                            <div class="row">
                                <div class="col-8 pt-2">
                                   
                                </div>
                                <div class="col-4 pt-2">
                                    <h6>Due Date - 15 March 2023, 11:59</h6>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col-12">
                        <p className='py-1 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col-2 px-3">
                            <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Submit
                            </button>
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-outline-primary signupbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Download
                            </button>
                        </div>
                    </div>
                    

                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
  );
}