// // import React, { useEffect, useState } from 'react';
// // import './landingpage.css';

// // export const landingpage=() =>{
// //     return (
// //         <h1>Landing Page</h1>
// //     )
// // }

// import React from 'react';
// import './landingpage.css';
// export default function landingpage() {
//   return (
//     <div className='container-fluid landing'>
//         <div class="container-fluid top">
//             <div class="row">
//                 <div class="col-8">
//                     One of three columns
//                 </div>
//                 <div class="col-4">
//                     <div class="row">
//                         <div class="col-7 l_btn1">
//                             {/* <button type="button" class="btn btn-primary loginbtn">Log In</button> */}
//                             <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                                 Log In
//                             </button>
//                             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div class="modal-dialog modal-dialog-centered">
//                                     <div class="modal-content">
//                                     <div class="modal-header text-center row">
//                                         <div class="col-10 px-3">
//                                             <h5 class="modal-title " id="exampleModalLabel">Log In</h5>
//                                         </div>
//                                         <div class="col-2">
//                                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                         </div>                                                                            
//                                     </div>
//                                     <div class="modal-body">
//                                     <form className='px-2'>
//                                         <div class="form-group email-form">
//                                             {/* <label for="exampleInputEmail1">Email address</label> */}
//                                             <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
//                                             {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                                         </div>
//                                         <div class="form-group email-form">
//                                             {/* <label for="exampleInputPassword1">Password</label> */}
//                                             <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Password"></input>
//                                         </div>
//                                         <div class="form-group form-check">
//                                             <div class="row py-2">
//                                                 <div class="col-6">
//                                                     <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
//                                                     <label class="form-check-label" for="exampleCheck1">Remember Me</label>
//                                                 </div>
//                                                 <div class="col-4">
//                                                     <label class="form-check-label" for="exampleCheck1">Forgot password?</label>
//                                                 </div>    
//                                             </div>
//                                         </div>
//                                         <div class="text-center py-2">
//                                             <button type="submit" class="btn btn-primary sub-btn btn-block">Log In</button>
//                                         </div>
                                        
//                                     </form>
//                                     </div>
//                                     {/* <div class="modal-footer text-center">
//                                         <button type="button" class="btn btn-primary">LogIn</button>
//                                     </div> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-5 l_btn2">
//                             <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
//                                 Sign Up
//                             </button>
//                             {/* <button type="button" class="btn btn-outline-primary signupbtn">Sign Up</button> */}
//                             <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div class="modal-dialog modal-dialog-centered">
//                                     <div class="modal-content">
//                                     <div class="modal-header text-center row">
//                                         <div class="col-10 px-3">
//                                             <h5 class="modal-title " id="exampleModalLabel">Register</h5>
//                                         </div>
//                                         <div class="col-2">
//                                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                         </div>                                                                            
//                                     </div>
//                                     <div class="modal-body">
//                                     <form className='px-2'>
//                                         <div class="form-group email-form">
//                                             {/* <label for="exampleInputEmail1">Email address</label> */}
//                                             <input type="email" class="form-control py-2" id="exampleInputEmail2" placeholder="Username"></input>
//                                             {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                                         </div>
//                                         <div class="form-group email-form">
//                                             {/* <label for="exampleInputEmail1">Email address</label> */}
//                                             <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
//                                             {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                                         </div>
//                                         <div class="form-group email-form">
//                                             {/* <label for="exampleInputPassword1">Password</label> */}
//                                             <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Password"></input>
//                                         </div>
//                                         <div class="form-group email-form">
//                                             {/* <label for="exampleInputPassword1">Password</label> */}
//                                             <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Confirm Password"></input>
//                                         </div>
//                                         <div class="form-group form-check">
//                                             <div class="row py-2">
//                                                 <div class="col-6">
//                                                     {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"></input> */}
//                                                     <label class="form-check-label" for="exampleCheck1">Already Have An Account?</label>
//                                                 </div>
//                                                 <div class="col-4">
//                                                     <label class="form-check-label" for="exampleCheck1">Login</label>
//                                                 </div>    
//                                             </div>
//                                         </div>
//                                         <div class="text-center py-2">
//                                             <button type="submit" class="btn btn-primary sub-btn btn-block">Register</button>
//                                         </div>
                                        
//                                     </form>
//                                     </div>
//                                     {/* <div class="modal-footer text-center">
//                                         <button type="button" class="btn btn-primary">LogIn</button>
//                                     </div> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//         <div class="container-fluid inf"></div>
//         <div class="container-fluid ttl">
//             <div class="row">
//                 <div class="col-2"></div>
//                 <div class="col-8 main_ttl_div">
//                     <h1 className='main_ttl'>LEARNFINITY</h1>
//                 </div>
//                 <div class="col-2"></div>
//             </div>
//         </div>
//         <div class="container-fluid main_txt">
//             <div class="row">
//                 <div class="col-2"></div>
//                 <div class="col-8">
//                     <h4 className='lp_txt'>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                     </h4>
//                 </div>
//                 <div class="col-2"></div>
//             </div>
//         </div>
//         <div class="container-fluid btm">
//             <div class="row">
//                 <div class="col-4"></div>
//                 <div class="col-4 rmbtn_div">
//                     <button type="button" class="btn btn-primary rmbtn">Read More</button>
//                 </div>
//                 <div class="col-4"></div>
//             </div>
//         </div> 
                  
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import './landingpage.css';

// export const landingpage=() =>{
//     return (
//         <h1>Landing Page</h1>
//     )
// }

import React from 'react';
import './landingpage.css';
import logo from '../../images/logo_black.png';
export default function landingpage() {
  return (
    <div className='container-fluid landing  min-vh-100'>
        <div class="bg-image"></div>
        <div class="bg-text1">
            <div class="row">
                <div class="col-1 logo">
                <a className='navbar-brand ' href='/'>
					<img src={logo} alt='CAIC' width='100' height='60' />
				</a>
                </div>
                <div class="col-7"></div>
                <div class="col-4">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-3 l_btn1">
                           
                            <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Log In
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <form className='px-2'>
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
                            </div>
                        </div>
                        <div class="col-3 l_btn2">
                            <button type="button" class="btn btn-outline-primary signupbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Sign Up
                            </button>
                            {/* <button type="button" class="btn btn-outline-primary signupbtn">Sign Up</button> */}
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
                                    <form className='px-2'>
                                        <div class="form-group email-form">
                                            {/* <label for="exampleInputEmail1">Email address</label> */}
                                            <input type="email" class="form-control py-2" id="exampleInputEmail2" placeholder="Username"></input>
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group email-form">
                                            {/* <label for="exampleInputEmail1">Email address</label> */}
                                            <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div class="form-group email-form">
                                            {/* <label for="exampleInputPassword1">Password</label> */}
                                            <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Password"></input>
                                        </div>
                                        <div class="form-group email-form">
                                            {/* <label for="exampleInputPassword1">Password</label> */}
                                            <input type="password" class="form-control py-2" id="exampleInputPassword1" placeholder="Confirm Password"></input>
                                        </div>
                                        <div class="form-group form-check">
                                            <div class="row py-2">
                                                <div class="col-6">
                                                    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"></input> */}
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
                                    {/* <div class="modal-footer text-center">
                                        <button type="button" class="btn btn-primary">LogIn</button>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 l_btn2"></div>
                    </div>
                </div>
                
            </div>

        </div>
        <div class="bg-text">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8 main_ttl_div">
                        <h1 className='main_ttl'>LEARNFINITY</h1>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row py-1">
                    <div class="col-1"></div>
                    <div class="col-10 ">
                        <h4 className='lp_txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </h4>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
            <div class="container-fluid btm">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4 rmbtn_div">
                        <button type="button" class="btn btn-primary rmbtn">Read More</button>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        </div>
    </div>
  );
}