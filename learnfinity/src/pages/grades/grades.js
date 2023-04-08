import React, { useState, useEffect } from 'react';
import './grades.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import Grade_card from '../../components/grade_card';
export default function Grades() {
    const [grades,setGrades]=useState([])
    useEffect(()=>{
        fetch("/grades",{
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
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1">
                        <h2>Grades</h2>
                </div>
                <Profile_comp></Profile_comp>
            </div>
            <div class="row">
                <h4>Current Semester</h4>
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
            
            <div class="row">
                <h4>Overall</h4>
                <div class="col-12">
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-10">
                                    <h5>Semester 1 - Session 2021-2022</h5>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Download
                                    </button>
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
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                    <th scope="row">1</th>
                                    <td >Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
                </div>               
            </div>

            <Footer></Footer>

        </div>
    </div>
  );
}