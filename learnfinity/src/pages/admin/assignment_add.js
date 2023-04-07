
import React from 'react';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import profile from "../../images/default.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand.png"
import nt from "../../images/notes.png"
import Profile_comp from '../../components/profile';
import add_icon from "../../images/add_icon.png"
export default function Assignment_add() {
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
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
                            <h3 className='text-center my-2'>Add Assignment</h3>
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
                <h5 className=''>Uploaded assignments</h5>
                <hr></hr>
                    <div class="row text-center px-3">
                    <div class="card">
                        <div class="card-body">
                        
                        <div class="col-4">
                            <h6>COP 290-Lab 3 (Week 3)</h6>
                            <h6>weightage 50%</h6>
                        </div>
                        <div class="col-2"></div>
                        <div class="col-2"></div>
                        <div class="col-2"></div>
                        <div class="col-2"></div>
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