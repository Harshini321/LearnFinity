import { useParams } from 'react-router-dom';
import React, { useState, useEffect }  from 'react';
import './assignment.css';
import Nav from "../../components/navbar/navbar"
import Eval_card from '../../components/eval_card';
import Footer from "../../components/footer/footer"
import nt from "../../images/notes.png"
export default function Assignment_course() {
    const parms=useParams()
    const course_id=parms.course_id
    const [evals,setEvals]=useState([])
    useEffect(()=>{
        fetch("/evaluation/${course_id}",{
            'methods':'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setEvals(resp))
        .catch(error => console.log(error))
    },[])
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>{course_id} : Assignments</h2></div>
                <profile_comp></profile_comp>
            </div>         
            <div class="card my-3">
                <div class="card-body">
                    <div class="row px-3">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-3 icon-block">
                                    <img src={nt} alt='CAIC' width='40' height='40' />
                                </div>
                                <div class="col-9 pt-2">
                                    <h5>New Assignment</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="row">
                                <div class="col-8 pt-2">
                                   
                                </div>
                                <div class="col-4 pt-2">
                                    <h6>Due Date - 15 March 2023, 11:59</h6>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col-12">
                        <p className='py-1 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col-2 px-3">
                            <a href="/eval_submission" class="btn btn-primary btn-sm" className="btn btn-primary  loginbtn" role="button" aria-disabled="true">Submit</a>
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-outline-primary signupbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {evals.map(eva=>{
                return<Eval_card
                    id={eva.id}
                    title={eva.title}
                    staticfile_id={eva.staticfile_id}
                    content={eva.content}
                    deadline={eva.deadline}
                    course_id={eva.course_id}
                    weightage={eva.weightage}
                    total_marks={eva.total_marks}
                    submission_allowed={eva.submission_allowed}
                ></Eval_card>
            })}
            <Footer></Footer>
        </div>
    </div>
  );
}