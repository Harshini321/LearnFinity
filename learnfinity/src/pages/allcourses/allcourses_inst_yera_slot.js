import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './allcourses.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import CourseCard from "../../components/course_card/coursecard"
import Footer from "../../components/footer/footer"
export default function AllCourses_inst_year_slot() {
    const parms=useParams()
    const year=parms.year
    const semester=parms.semester
    const slot_id=parms.slot_id
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch("/courses/${year}/${semester}/${slot_id}",{
            'methods':'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setCourses(resp))
        .catch(error => console.log(error))
    },[])
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            
            <div class="row course">
                <h3>All Courses : year {year} : semester {semester} : slot_id : {slot_id}</h3>
                <div class="row py-3">
                    
                    <div class="col-4">
                        <div class="px-2">
                            <div class="card rem-rad">
                                <img class="card-img-top" src={logo} alt="Card image cap"></img>
                                <div class="card-body">
                                    <h5 class="card-title">COP290 </h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                </div>
                                
                                <div class="card-body">
                                    <a href="#" class="card-link no_underline">credits:3</a>
                                    <a href="#" class="card-link no_underline">year:2023</a>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="px-2">
                            <div class="card rem-rad">
                                <img class="card-img-top" src={logo} alt="Card image cap"></img>
                                <div class="card-body">
                                    <h5 class="card-title">COP290 </h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                </div>
                                
                                <div class="card-body">
                                    <a href="#" class="card-link no_underline">credits:3</a>
                                    <a href="#" class="card-link no_underline">year:2023</a>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="px-2">
                            <div class="card rem-rad">
                                <img class="card-img-top" src={logo} alt="Card image cap"></img>
                                <div class="card-body">
                                    <h5 class="card-title">COP290 </h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                </div>
                                
                                <div class="card-body">
                                    <a href="#" class="card-link no_underline">credits:3</a>
                                    <a href="#" class="card-link no_underline">year:2023</a>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div class="col-4">
                        {courses.map(course=>{
                            return <CourseCard
                                name={course.name}
                                description={course.description}
                                id={course.id}
                                semester={course.semester}
                                year={course.year}
                                credits={course.credits}
                                type={course.type}
                                insti_id={course.insti_id}
                                slot_id={course.slot_id}
                            ></CourseCard>
                        })}
                    </div>        
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
  );
}