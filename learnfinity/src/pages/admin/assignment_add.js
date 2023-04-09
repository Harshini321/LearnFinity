
import React from 'react';
import Nav from "../../components/navbar/admin_nav"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import add_icon from "../../images/add_icon.png"
import edit_icon from "../../images/edit_icon.png"
import grade_icon from "../../images/grade_icon.png"
import pdf from "../../images/pdf.png"
export default function Assignment_add() {
  return (
    <div class='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>COP 290</h2></div>
                <Profile_comp></Profile_comp>
            </div>
            
            <div class="card">
                <div class="card-body">
                    <div class="row text-center">
                        <div class="col-4"></div>
                        <div class="col-3">
                            <h3 class='text-center my-2'>Add Assignment</h3>
                        </div>
                        <div class="col-1 mt-2">
                            <a type="button" href='/admin/notes/add' >
                                <img src={add_icon} alt='CAIC' width='35' height='35' />
                            </a>
                        </div>
                        <div class="col-3"></div>         
                    </div>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                <h5 class=''>Uploaded assignments</h5>
                <hr></hr>
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <h6>COP 290- Lab3</h6>
                                    <h6>Weightage: 50%</h6>
                                </div>
                                <div class="col-2">
                                    <div class="row px-3">
                                        <div class="col-3 pt-2">
                                            <a type="button" href='/admin/notes/{id}/edit' >
                                                <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                            </a>
                                        </div>
                                        <div class="col-9 pt-2">
                                            Edit
                                        </div>                  
                                    </div>
                                </div>
                                <div class="col-2">
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
                                <div class="col-2">
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
        </div>
        
        <Footer></Footer>
    </div>
    
  );
}