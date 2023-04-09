
import React from 'react';
import './posts.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import CourseCard from "../../components/course_card/coursecard"
import Footer from "../../components/footer/footer"
import profile from "../../images/default.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand.png"
import profile_comp from '../../components/profile';
export default function Posts() {
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>Posts and Comments</h2></div>
                <profile_comp></profile_comp>
            </div>           
            <div class="row py-3">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>COP 290</h4> 
                            <div class="row py-3">
                                <div class="col-4 px-3">
                                    <div class="px-2">
                                        <div class="card rem-rad">
                                            <img class="card-img-top" src={logo} alt="Card image cap"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">Title</h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                            <div class="card-body">
                                                <a href="#" class="card-link no_underline">Read More</a>
                                            </div> 
                                        </div>  
                                        
                                    </div>
                                    
                                </div>
                                <div class="col-4 px-3">
                                    <CourseCard></CourseCard>
                                </div>
                                <div class="col-4 px-3">
                                    <CourseCard></CourseCard>
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