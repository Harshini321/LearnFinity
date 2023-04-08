import React from 'react';

import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import CourseCard from "../../components/course_card/coursecard"
import add_icon from "../../images/add_icon.png"
import edit_icon from "../../images/edit_icon.png"
import grade_icon from "../../images/grade_icon.png"
import pdf from "../../images/pdf.png"
import dl from "../../images/deadline.png"
import quiz from "../../images/quiz.png"
import lab from "../../images/lab.png"
import nf from "../../images/notification.png"
import ann from "../../images/ann.png"

export default function Dashboard_a() {
  return (
    <div class='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>Welcome back, Abhilash! </h2></div>
                <Profile_comp></Profile_comp>
            </div>
            <div class="row">
                <div class="col-6 my-3">
                    <div class="card">
                        <div class="card-body ">
                            <h4 class='px-3'>Lecture Notes</h4>
                            <hr></hr>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>Add Notes</p>
                                </div>
                                <div class="col-3">
                                    <a type="button" href='/admin/notes/add' >
                                        <img src={add_icon} alt='CAIC' width='25' height='25' />
                                    </a>
                                </div>
                                <hr></hr>
                            </div>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>Lecture 2</p>
                                </div>
                                <div class="col-3">
                                    <a type="button" href='/admin/notes/{id}/edit' >
                                        <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                    </a>
                                </div>
                                
                            </div>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>Lecture 3</p>
                                </div>
                                <div class="col-3">
                                    <a type="button" href='/admin/notes/{id}/edit' >
                                        <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-6 my-3">
                    <div class="card">
                        <div class="card-body ">
                            <h4 class='px-3'>Assignments</h4>
                            <hr></hr>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>Add Assignments</p>
                                </div>
                                
                                <div class="col-3">
                                    <a type="button" href='/admin/assignment/add' >
                                        <img src={add_icon} alt='CAIC' width='25' height='25' />
                                    </a>
                                </div>
                                <hr></hr>
                            </div>
                            
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>COP 290 -Lab</p>
                                </div>
                                <div class="col-3">

                                    <a type="button" href='/admin/notes/{id}/edit' >
                                        <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                    </a>
                                </div>
                                
                            </div>
                            <div class="row px-3">
                                <div class="col-4 px-3">
                                    <div class="row px-3">
                                        <div class="col-3 pt-1">
                                            <a type="button" href='/admin/notes/{id}/edit' >
                                                <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                            </a>
                                        </div>
                                        <div class="col-9 pt-2">
                                            Edit
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div class="col-4">
                                <div class="row px-3">
                                        <div class="col-3 pt-1">
                                            <a type="button" href='/admin/notes/{id}/edit' >
                                                <img src={pdf} alt='CAIC' width='20' height='20' />
                                            </a>
                                        </div>
                                        <div class="col-9 pt-2">
                                            PDF
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                <div class="col-4">
                                <div class="row px-3">
                                        <div class="col-3 pt-2">
                                            <a type="button" href='/admin/notes/{id}/edit' >
                                                <img src={grade_icon} alt='CAIC' width='15' height='15' />
                                            </a>
                                        </div>
                                        <div class="col-9 pt-2">
                                            Grade
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>    
                </div>
            </div>
            

            <div class="row">
                <div class="col-6 my-3">
                    <div class="card">
                        <div class="card-body ">
                            <h4 class='px-3'>Announcements</h4>
                            <hr></hr>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>Add Announcements</p>
                                </div>
                                <div class="col-3">
                                    <a type="button" href='/admin/notes/add' >
                                        <img src={add_icon} alt='CAIC' width='25' height='25' />
                                    </a>
                                </div>
                                <hr></hr>
                            </div>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>New Announcement :COP290</p>
                                                     
                                </div>
                                <div class="col-3">
                                    <a type="button" href='/admin/notes/{id}/edit' >
                                        <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                    </a>
                                </div>
                                
                                
                            </div>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>Lecture 3</p>
                                </div>
                                <div class="col-3">
                                    <a type="button" href='/admin/notes/{id}/edit' >
                                        <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>    
                </div>
                <div class="col-6 my-3">
                    <div class="card">
                        <div class="card-body ">
                            <h4 class='px-3'>Post and Comments</h4>
                            <hr></hr>
                            <div class="row px-3">
                                <div class="col-9">
                                    <p class='px-3'>Add Post</p>
                                </div>
                                
                                <div class="col-3">
                                    <a type="button" href='/admin/assignment/add' >
                                        <img src={add_icon} alt='CAIC' width='25' height='25' />
                                    </a>
                                </div>
                                <hr></hr>
                            </div>
                            
                            <div class="row px-3">
                                <h6>Heading</h6>    
                                <p>Description.
                                Lorem ipsum dolor sit amet, consectetur. 
                                </p>                       
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