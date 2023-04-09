import React, { useState, useEffect } from 'react';
import './grades.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import Grade_card from '../../components/grade_card';
import {ReactSession} from 'react-client-session'
import axios from 'axios'
export default function Grades() {
    const [gradeList, setgradeList] = useState([]);
    ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('access_token');
    useEffect(() =>
    {
        axios.get('http://10.17.6.4/grades', {headers: { Authorization: `Bearer ${token}` }},{withCredentials: true })
        .then(res => {
            console.log(res.data)
            console.log("courselist")
            setgradeList(res.data)
        })
    }, [])
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
                    <h4>Previous Courses</h4>
                    {gradeList.map(grade=>{
                        if(grade.grade!="Not Graded Yet"){
                        return <Grade_card
                            id={grade.id}
                            grade={grade.grade}
                            student_id={grade.user_email}
                            course_id={grade.course_name}
                        ></Grade_card>}}
                    )}
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