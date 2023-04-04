// import React, { useEffect, useState } from 'react';
// import './landingpage.css';

// export const landingpage=() =>{
//     return (
//         <h1>Landing Page</h1>
//     )
// }

import React from 'react';
import './grades.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import CourseCard from "../../components/course_card/coursecard"
import Footer from "../../components/footer/footer"
import profile from "../../images/default.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand.png"
import lg from '../../images/lf_logo.png';
export default function grades() {
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1">
                        <h2>Grades</h2>
                </div>
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



            <div class="row">
                <h4>Current Semester</h4>
                <div class="row py-3 ">
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
            
            <div class="row">
                <h4>Overall</h4>
                <div class="col-12">
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-10">
                                    <h5>Semester 1 - Session 2021-2022</h5>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-12 mb-3">
                    <div class="card" >
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                    <th scope="row">1</th>
                                    <td >Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                </div>
                
                
            </div>

            <Footer></Footer>

        </div>
    </div>
  );
}