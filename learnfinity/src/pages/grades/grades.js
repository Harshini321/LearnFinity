import React, { useState, useEffect } from 'react';
import './grades.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import Grade_card from '../../components/grade_card';
import { ReactSession } from 'react-client-session'
import axios from 'axios'
export default function Grades() {

    const [gradeList, setgradeList] = useState([]);
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    useEffect(() => {
        axios.get('http://10.17.6.4/grades', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                console.log("courselist")
                setgradeList(res.data)
            })
    }, [])
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get('http://10.17.6.4/courses', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data.courses)
                console.log("courselist")
                setCourses(res.data.courses)
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
                    <h4>Ongoing Courses</h4>
                    <div class="row py-3 ">
                      
                        {gradeList.map(grade => {
                            if (grade.grade == "Not Graded Yet") {
                                return <Grade_card
                                    id={grade.id}
                                    grade={grade.grade}
                                    student_id={grade.user_email}
                                    course_id={grade.course_name}
                                ></Grade_card>
                            }
                        }
                        )}
                        <h4>Previous Courses</h4>
                        {gradeList.map(grade => {
                            if (grade.grade != "Not Graded Yet") {
                                return <Grade_card
                                    id={grade.id}
                                    grade={grade.grade}
                                    student_id={grade.user_email}
                                    course_id={grade.course_name}
                                ></Grade_card>
                            }
                        }
                        )}
                    </div>
                </div>

                <div class="row">
                    <h4 className='mb-3'>Overall</h4>
                    {/* <div class="col-12">
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
                    </div> */}

                    <div class="col-12 mb-3">
                        <div class="card" >
                            <div class="card-body">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Your Grade</th>
                                            <th scope="col">Year</th>
                                            <th scope="col">Semester</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gradeList.map(grade => {

                                            if (grade.grade != "Not Graded Yet") {
                                                return (
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <td scope="col">{grade.course_name}</td>
                                                        <td scope="col">{grade.grade}</td>
                                                        <td scope="col">{grade.course_year}</td>
                                                        <td scope="col">{grade.course_semester}</td>
                                                    </tr>)

                                            }
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
            <Footer></Footer>
        </div>
    );
}