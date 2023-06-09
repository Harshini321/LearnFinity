import React from 'react';
import './course.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import profile from "../../images/default.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand.png"
import ann from "../../images/ann.png"
import notes from "../../images/notes.png"

export default function Course() {
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>COP 290</h2></div>
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
            </div>


            <div class="row py-3">
                <div class="col-6 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>Assignments</h4>
                            <div class="form-check dl2 py-2 ">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            <div class="form-check dl2 py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-6 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>Upcoming Events</h4>
                            <div class="form-check dl2 py-2 ">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            <div class="form-check dl2 py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div class="row py-3">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>Announcements</h4>
                            <div class="card my-3">
                                <div class="card-body">
                                    <div class="row px-3">
                                        <div class="col-3">
                                            <div class="row">
                                                <div class="col-3 icon-block">
                                                    <img src={ann} alt='CAIC' width='40' height='40' />
                                                </div>
                                                <div class="col-9">
                                                    New Assignment<br></br>
                                                    COP 290
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-9">

                                        </div>
                                    </div>
                                    <div class="row px-3">
                                        <div class="col-12">
                                        <p className='py-2 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div class="card my-2">
                                <div class="card-body">
                                    <div class="row px-3">
                                        <div class="col-3">
                                            <div class="row">
                                                <div class="col-3 icon-block">
                                                    <img src={ann} alt='CAIC' width='40' height='40' />
                                                </div>
                                                <div class="col-9">
                                                    New Assignment<br></br>
                                                    COP 290
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-9">

                                        </div>
                                    </div>
                                    <div class="row px-3">
                                        <div class="col-12">
                                        <p className='py-2 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>    
            </div>

            <div class="row py-3">
                <div class="col-4 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>Notes</h4>
                            <div class="row">
                                <div class="col-2 icon-block1">
                                    <img src={notes} alt='CAIC' width='30' height='30' />
                                </div>
                                <div class="col-9 py-2">
                                    Note1
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 icon-block1">
                                    <img src={notes} alt='CAIC' width='30' height='30' />
                                </div>
                                <div class="col-9 py-2">
                                    Note1
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 icon-block1">
                                    <img src={notes} alt='CAIC' width='30' height='30' />
                                </div>
                                <div class="col-9 py-2">
                                    Note1
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>Posts And Comments</h4>
                                <div class="card my-3">
                                    <div class="card-body">
                                        This is some text within a card body.
                                    </div>
                                </div>
                                <div class="card my-3">
                                    <div class="card-body">
                                        This is some text within a card body.
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
           <Footer></Footer>

        </div>
    </div>
  );
}


// export default function Course() {
//     return (
//       <div className='container-fluid dashboard row  min-vh-100'>      
//           <Nav></Nav>
//           <div class="col-10 dash">
//           <div class="row">
//                   <div class="col-11 pb-3 pt-1"><h2>COP 290</h2></div>
//                   <div class="col-1">
//                       <a type="button" className='navbar-brand nav-logo'   data-bs-toggle="modal" data-bs-target="#exampleModal1" >
//                           <img src={profile} alt='CAIC' width='40' height='40' />
//                           <img src={expand} alt='CAIC' width='40' height='40' />
//                       </a>
//                       <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                           <div class="modal-dialog modal-dialog-centered">
//                               <div class="modal-content">
//                               <div class="modal-header text-center row">
//                                   <div class="col-10">    
//                                   <div class="profile">  
//                                       <h5 class="modal-title " id="exampleModalLabel">Profile</h5>    
//                                       </div>                                                              
//                                   </div>
//                                   <div class="col-2">
//                                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                   </div>                                                                            
//                               </div>
//                               <div class="modal-body">
//                                   <div class="text-center">
//                                       <img src={pf} alt='CAIC' width='100' height='100' />
//                                   </div>
//                               <form className='px-2'>
//                                   <div class="form-group email-form">
//                                       <input type="email" class="form-control py-2" id="exampleInputEmail2" placeholder="Username"></input>
//                                   </div>
//                                   <div class="form-group email-form">
//                                       <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
//                                   </div>
  
//                                   <div class="form-group form-check">
//                                       <div class="row py-2 text-center">
//                                           <div class="col-6">
//                                               <label class="form-check-label" for="exampleCheck1">Change Password</label>
//                                           </div>
//                                           <div class="col-4">
//                                               <label class="form-check-label" for="exampleCheck1">Log Out</label>
//                                           </div>    
//                                       </div>
//                                   </div>
//                               </form>
//                               </div>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
  
  
//               <div class="row py-3">
//                   <div class="col-6 ">
//                       <div class="card">
//                           <div class="card-body">
//                               <h4 className='px-3'>Assignments</h4>
//                               <div class="form-check dl2 py-2 ">
//                                   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
//                                   <label class="form-check-label" for="flexCheckDefault">
//                                       COP 290-lab3 Weightage 50%
//                                   </label><br></br>
//                                   <small>15 March</small>
//                               </div>
//                               <div class="form-check dl2 py-2">
//                                   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
//                                   <label class="form-check-label" for="flexCheckDefault">
//                                       COP 290-lab3 Weightage 50%
//                                   </label><br></br>
//                                   <small>15 March</small>
//                               </div>
                              
//                           </div>
//                       </div>
//                   </div>
//                   <div class="col-6 ">
//                       <div class="card">
//                           <div class="card-body">
//                               <h4 className='px-3'>Upcoming Events</h4>
//                               <div class="form-check dl2 py-2 ">
//                                   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
//                                   <label class="form-check-label" for="flexCheckDefault">
//                                       COP 290-lab3 Weightage 50%
//                                   </label><br></br>
//                                   <small>15 March</small>
//                               </div>
//                               <div class="form-check dl2 py-2">
//                                   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
//                                   <label class="form-check-label" for="flexCheckDefault">
//                                       COP 290-lab3 Weightage 50%
//                                   </label><br></br>
//                                   <small>15 March</small>
//                               </div>
                              
//                           </div>
//                       </div>
//                   </div>
//               </div>
  
  
//               <div class="row py-3">
//                   <div class="col-12">
//                       <div class="card">
//                           <div class="card-body">
//                               <h4 className='px-3'>Announcements</h4>
//                               <div class="card my-3">
//                                   <div class="card-body">
//                                       <div class="row px-3">
//                                           <div class="col-3">
//                                               <div class="row">
//                                                   <div class="col-3 icon-block">
//                                                       <img src={ann} alt='CAIC' width='40' height='40' />
//                                                   </div>
//                                                   <div class="col-9">
//                                                       New Assignment<br></br>
//                                                       COP 290
//                                                   </div>
//                                               </div>
  
//                                           </div>
//                                           <div class="col-9">
  
//                                           </div>
//                                       </div>
//                                       <div class="row px-3">
//                                           <div class="col-12">
//                                           <p className='py-2 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                                           </div>
//                                       </div>
  
//                                   </div>
//                               </div>
                              
//                               <div class="card my-2">
//                                   <div class="card-body">
//                                       <div class="row px-3">
//                                           <div class="col-3">
//                                               <div class="row">
//                                                   <div class="col-3 icon-block">
//                                                       <img src={ann} alt='CAIC' width='40' height='40' />
//                                                   </div>
//                                                   <div class="col-9">
//                                                       New Assignment<br></br>
//                                                       COP 290
//                                                   </div>
//                                               </div>
  
//                                           </div>
//                                           <div class="col-9">
  
//                                           </div>
//                                       </div>
//                                       <div class="row px-3">
//                                           <div class="col-12">
//                                           <p className='py-2 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//                                           </div>
//                                       </div>
  
//                                   </div>
//                               </div>
                              
//                           </div>
//                       </div>
//                   </div>    
//               </div>
  
//               <div class="row py-3">
//                   <div class="col-4 ">
//                       <div class="card">
//                           <div class="card-body">
//                               <h4 className='px-3'>Notes</h4>
//                               <div class="row">
//                                   <div class="col-2 icon-block1">
//                                       <img src={notes} alt='CAIC' width='30' height='30' />
//                                   </div>
//                                   <div class="col-9 py-2">
//                                       Note1
//                                   </div>
//                               </div>
//                               <div class="row">
//                                   <div class="col-2 icon-block1">
//                                       <img src={notes} alt='CAIC' width='30' height='30' />
//                                   </div>
//                                   <div class="col-9 py-2">
//                                       Note1
//                                   </div>
//                               </div>
//                               <div class="row">
//                                   <div class="col-2 icon-block1">
//                                       <img src={notes} alt='CAIC' width='30' height='30' />
//                                   </div>
//                                   <div class="col-9 py-2">
//                                       Note1
//                                   </div>
//                               </div>
                              
//                           </div>
//                       </div>
//                   </div>
//                   <div class="col-8">
//                       <div class="card">
//                           <div class="card-body">
//                               <h4 className='px-3'>Posts And Comments</h4>
//                                   <div class="card my-3">
//                                       <div class="card-body">
//                                           This is some text within a card body.
//                                       </div>
//                                   </div>
//                                   <div class="card my-3">
//                                       <div class="card-body">
//                                           This is some text within a card body.
//                                       </div>
//                                   </div>
                              
//                           </div>
//                       </div>
//                   </div>
//               </div>
              
//              <Footer></Footer>
  
//           </div>
//       </div>
//     );
// }