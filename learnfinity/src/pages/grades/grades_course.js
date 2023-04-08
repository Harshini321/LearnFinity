import React, { useState, useEffect } from 'react';
import './grades.css';
import { useParams } from 'react-router-dom';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import Grade_card from '../../components/grade_card';
export default function Grades_courses() {
    const parms=useParams()
    const course_id=parms.course_id
    const [grades,setGrades]=useState([])
    useEffect(()=>{
        fetch("/grades/${course_id}",{
            'methods':'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setGrades(resp))
        .catch(error => console.log(error))
    },[])
  return (
    <div class='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1">
                        <h2>Grades</h2>
                </div>
                <Profile_comp></Profile_comp>
            </div>
            <div class="row">
                <h4>Current Semester : Course {course_id}</h4>
                <div class="row py-3 ">
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-3 px-3 mb-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5 class="card-title">COP 290</h5>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                <h6 class="card-subtitle mb-2 mt-2 text-muted">Total 90</h6>
                                
                            </div>
                        </div>
                    </div>
                    {grades.map(grade=>{
                        return <Grade_card
                            id={grade.id}
                            grade={grade.grade}
                            student_id={grade.student_id}
                            course_id={grade.course_id}
                        ></Grade_card>
                    })}
                </div>              
            </div>
            <Footer></Footer>
        </div>
    </div>
  );
}