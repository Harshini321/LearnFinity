import { useParams } from 'react-router-dom';
import React, { useState, useEffect }  from 'react';
import './assignment.css';
import Nav from "../../components/navbar/navbar"
import Eval_card from '../../components/eval_card';
import Footer from "../../components/footer/footer"
import nt from "../../images/notes.png"
import axios from 'axios';
import {ReactSession} from 'react-client-session';
export default function Assignment_course() {
    const parms=useParams()
    const course_id=parms.course_id
    const [coursedetail, setCourseDetails] = useState({})

    ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('access_token');
    const [evaluationList, setEvaluationList] = useState([]);
    useEffect(() =>
    {   
        axios.get(`http://10.17.6.4/evaluation/${course_id}`, {headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 

        }},{withCredentials: true })
        .then(res => {
            console.log(res.data)
            setEvaluationList(res.data)
        })
    }, [])
    useEffect(() =>
    {
        axios.get(`http://10.17.6.4/courses/id/${course_id}`,{headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 

        }}, {withCredentials: true })
        .then(res => {
            console.log(res.data)
            setCourseDetails(res.data)
        })
    }, [])
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>{coursedetail.name} : Assignments</h2></div>
                <profile_comp></profile_comp>
            </div>         
            
            {evaluationList.map(eva=>{
                return<Eval_card
                    id={eva.id}
                    title={eva.title}
                    staticfile_name={eva.staticfile_name}
                    staticfile_url = {eva.staticfile_url}
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