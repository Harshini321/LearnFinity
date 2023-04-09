import React from 'react';
import profile from "../images/default.png"
import pf from "../images/prof_def.png"
import expand from "../images/expand.png"
export default function profile_comp() {
  return (
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
                </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}