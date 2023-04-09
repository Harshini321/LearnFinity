import React, { useState, useEffect } from 'react';
import './allcourses.css';
import axios from 'axios'
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
        'id':2,
    },
    {
        'name':'course2',
        'description':'desc',
        'id':3,
    },
    {
        'name':'course1',
        'description':'desc',
        'id':4,
    },
    {
        'name':'course2',
        'description':'desc',
        'id':5,
    },
    {
        'name':'course2',
        'description':'desc',
        'id':6,
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
    

    // const [courses,setCourses]=useState([])
    
    // useEffect(() =>
    // {
    //     axios.get('http://localhost:5000/courses',  {withCredentials: true })
    //     .then(res => {
    //         console.log(res.data.courses)
    //         console.log("courselist")
    //         setCourses(res.data.courses)
    //     })
    // }, [])

  return (
    <div class='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            <h3>Courses</h3>
            <div class="row course">
                
            
                    {/* <div class="col-4 mt-3"> */}
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
                    {/* </div> */}
              
            </div>
            <Footer></Footer>
        </div>
    </div>
  );
}