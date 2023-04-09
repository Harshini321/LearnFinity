import React from 'react';
import "./admin.css"
import logo from '../../images/lf_logo.png';
import profile from "../../images/default2.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand2.png"

export default function Landingpage_a() {
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
                    <h2 class='head'>Welcome back , Abhilash !</h2>
                </div>
                <div class='col-2 pt-3 mt-3'>
                    <a type="button" class='navbar-brand nav-logo'   data-bs-toggle="modal" data-bs-target="#exampleModal1" >
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
                </div>
            </div>
            <div class='row mn-header'>
                <h1 class='text-center mn-header-h1'>CHOOSE COURSE</h1>
            </div>

            <div class='row co-row'>
                <div class='col-3 co-card'>
                    <div class="card px-3 py-3 co-rad">
                        <div class="card-body">
                            <h4 class="card-title text-center">COL 216</h4>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Computer Architecture</h6>
                            <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Semester 2</h6>
                        </div>
                    </div>
                </div>
                <div class='col-3 co-card'>
                    <div class="card px-3 py-3">
                        <div class="card-body">
                            <h4 class="card-title text-center">COL 216</h4>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Computer Architecture</h6>
                            <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Semester 2</h6>
                        </div>
                    </div>
                </div>
                <div class='col-3 co-card'>
                    <div class="card px-3 py-3">
                        <div class="card-body">
                            <h4 class="card-title text-center">COL 216</h4>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Computer Architecture</h6>
                            <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Semester 2</h6>
                        </div>
                    </div>
                </div>
                <div class='col-3 co-card'>
                    <div class="card px-3 py-3">
                        <div class="card-body">
                            <h4 class="card-title text-center">COL 216</h4>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Computer Architecture</h6>
                            <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h6 class="card-subtitle mb-2 text-muted text-center">Semester 2</h6>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        <div class='container-fluid bottom-l'></div>
    </div>
  );
}