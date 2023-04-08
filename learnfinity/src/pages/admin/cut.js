

import React from 'react';
import './btn.css';
import Nav from "../../components/navbar/admin_nav"
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

export default function Cut() {
  return (
    <div className='container-fluid dashboard row min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>Cut-offs</h2></div>
                <Profile_comp></Profile_comp>
            </div>
            <div class="row">
                
                <div class="col-12">
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-10">
                                    <h5>COP 290</h5>
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
                                    <th scope="col">Grade</th>
                                    <th scope="col">Lower Limit</th>
                                    <th scope="col">Upper Limit</th>
                                    
                                    <th ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                    <th scope="row">10</th>
                                    
                                    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Lower Limit"></input>
    </div></td>
    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Upper Limit"></input>
    </div></td>
    <td><a className='navbar-brand nav-logo' href='/'>
    <img src={add_icon} alt='CAIC' width='20' height='20' />
            </a></td>
                                    </tr>
                                    <tr >
                                    <th scope="row">9</th>
                                    
                                    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Lower Limit"></input>
    </div></td>
    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Upper Limit"></input>
    </div></td>
    <td><a className='navbar-brand nav-logo' href='/'>
    <img src={add_icon} alt='CAIC' width='20' height='20' />
            </a></td>
                                    </tr>
                                    <tr >
                                    <th scope="row">8</th>
                                    
                                    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Lower Limit"></input>
    </div></td>
    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Upper Limit"></input>
    </div></td>
    <td><a className='navbar-brand nav-logo' href='/'>
    <img src={add_icon} alt='CAIC' width='20' height='20' />
            </a></td>
                                    </tr>
                                    <tr >
                                    <th scope="row">7</th>
                                    
                                    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Lower Limit"></input>
    </div></td>
    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Upper Limit"></input>
    </div></td>
    <td><a className='navbar-brand nav-logo' href='/'>
    <img src={add_icon} alt='CAIC' width='20' height='20' />
            </a></td>
                                    </tr>
                                    <tr >
                                    <th scope="row">6</th>
                                    
                                    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Lower Limit"></input>
    </div></td>
    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Upper Limit"></input>
    </div></td>
    <td><a className='navbar-brand nav-logo' href='/'>
    <img src={add_icon} alt='CAIC' width='20' height='20' />
            </a></td>
                                    </tr>
                                    <tr >
                                    <th scope="row">5</th>
                                    
                                    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Lower Limit"></input>
    </div></td>
    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Upper Limit"></input>
    </div></td>
    <td><a className='navbar-brand nav-logo' href='/'>
    <img src={add_icon} alt='CAIC' width='20' height='20' />
            </a></td>
                                    </tr>
                                    <tr >
                                    <th scope="row">4</th>
                                    
                                    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Lower Limit"></input>
    </div></td>
    <td> <div class="form-group col-md-6">
      
      <input type="email" class="form-control" id="inputEmail4" placeholder="Upper Limit"></input>
    </div></td>
    <td><a className='navbar-brand nav-logo' href='/'>
    <img src={add_icon} alt='CAIC' width='20' height='20' />
            </a></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                </div>               
            </div>
            <div class="row py-3">
                                <div class="col-3"></div>
                                <div class="col-2 px-3">
                                    <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Save All
                                    </button>
                                </div>
                                <div class="col-2 px-3">
                                    <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Add
                                    </button>
                                </div>
                                
                            </div>
        </div>
        <Footer></Footer>
    
    </div>
  );
}
