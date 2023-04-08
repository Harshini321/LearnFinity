import React, { useState, useEffect } from 'react';
import './allcourses.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import CourseCard from "../../components/course_card/coursecard"
import Footer from "../../components/footer/footer"
import { useNavigate, useLocation } from 'react-router-dom';

const courses=[
    {
        'name':'course1',
        'description':'desc',
        'id':1,
    },
    {
        'name':'course2',
        'description':'desc',
        'id':3,
    }
]


export default function AllCourses() {
    // const [courses,setCourses]=useState([])
    const history = useNavigate();
    function detailCourse(id){
        history(`/course/${id}`);
    }
    // useEffect(()=>{
    //     fetch("/courses",{
    //         'methods':'GET',
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(resp => setCourses(resp))
    //     .catch(error => console.log(error))
    // },[])
    
  return (
    <div class='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            
            <div class="row course">
                <h3>Courses</h3>
                <div class="row py-3">
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
                                onDetail={detailCourse}
                            ></CourseCard>
                        })}
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
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
  );
}