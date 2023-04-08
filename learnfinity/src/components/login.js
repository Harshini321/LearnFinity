import React from 'react';
export default function login_btn() {
  return (
        <div class="col-3">        
            {/* <button type="button" class="btn btn-primary loginbtn" >
                Log In
            </button> */}
            <a href="/signin" class="btn btn-primary btn-sm" className="btn btn-primary  loginbtn" role="button" aria-disabled="true">Log In</a>
            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header row">
                        <div class="col-2"></div>
                        <div class="col-8">
                            <h5 class="modal-title " id="exampleModalLabel">Log In</h5>
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>                                                                            
                    </div>
                    <div class="modal-body">
                    <form class='px-2'>
                        <div class="form-group email-form">
                            
                            <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            
                        </div>
                        <div class="form-group email-form">
                            <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <div class="form-group form-check">
                            <div class="row py-2">
                                <div class="col-5">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                    <label class="form-check-label rem_me" for="exampleCheck1">Remember Me</label>
                                </div>
                                <div class="col-5">
                                    <label class="form-check-label" for="exampleCheck1">Forgot password?</label>
                                </div>    
                            </div>
                        </div>
                        <div class="text-center py-2">
                            <button type="submit" class="btn btn-primary sub-btn btn-block loginbtn">Log In</button>
                        </div>                
                    </form>
                    </div>
                    </div>
                </div>
            </div> */}
        </div>
  );
}