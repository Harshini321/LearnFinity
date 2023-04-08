import React from 'react';
export default function register() {
  return (
    <div class="col-3 l_btn2">
        <button type="button" class="btn btn-outline-primary signupbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Sign Up
        </button>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header text-center row">
                    <div class="col-10 px-3">
                        <h5 class="modal-title " id="exampleModalLabel">Register</h5>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>                                                                            
                </div>
                <div class="modal-body">
                <form class='px-2'>
                    <div class="form-group email-form">
                        <input type="email" class="form-control py-2" id="exampleInputEmail2" placeholder="Username"></input>
                    </div>
                    <div class="form-group email-form">
                        <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group email-form">
                        <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div class="form-group email-form">
                        <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Confirm Password"></input>
                    </div>
                    <div class="form-group form-check">
                        <div class="row py-2">
                            <div class="col-6">
                                <label class="form-check-label" for="exampleCheck1">Already Have An Account?</label>
                            </div>
                            <div class="col-4">
                                <label class="form-check-label" for="exampleCheck1">Login</label>
                            </div>    
                        </div>
                    </div>
                    <div class="text-center py-2">
                        <button type="submit" class="btn btn-primary sub-btn btn-block">Register</button>
                    </div>
                    
                </form>
                </div>
                </div>
            </div>
        </div>
    </div>  
        
  );
}