import React , { useState, useEffect }  from 'react';
import './course.css';
import { useParams } from 'react-router-dom';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import profile from "../../images/default.png"
import pf from "../../images/prof_def.png"
import expand from "../../images/expand.png"
import ann from "../../images/ann.png"
import notes from "../../images/notes.png"
import Announcement from '../../components/announcement_card';
import Evaluation_card from '../../components/evaluation_card';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

export default function Course_id() {
    const parms=useParams()
    const course_id=parms.course_id
    console.log(course_id)
    const [ans,setAns]=useState([])
    const [announcementList, setAnnouncementList] = useState([]);
    const [evaluationList, setEvaluationList] = useState([]);
    const [postsList, setPostList] = useState([]);
    const [coursedetail, setCourseDetails] = useState({})
    ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('access_token');
    useEffect(() =>
    {
        axios.get(`http://10.17.6.4/announcement/${course_id}`, {headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 

        }}, {withCredentials: true })
        .then(res => {
            console.log(res.data.announcement_list)
            console.log("courselist")
            setAnnouncementList(res.data.announcement_list)
        })
    }, [])
    
    
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
        axios.get(`http://10.17.6.4/post/${course_id}`,{headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 

        }}, {withCredentials: true })
        .then(res => {
            console.log(res.data.posts_list)
            setPostList(res.data.posts_list)
            
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
    <div class='container-fluid dashboard row  min-vh-100'>      
            <Nav></Nav>
        <div class="col-10 dash">
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>{coursedetail.name}</h2></div>
                <div class="col-1">
                    <a type="button" class='navbar-brand nav-logo'   data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                        <img src={profile} alt='CAIC' width='40' height='40' />
                        <img src={expand} alt='CAIC' width='40' height='40' />
                    </a>
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                            <div class="modal-header text-center row">
                                <div class="col-10">    
                                <div class="profile">  
                                    <h5 class="modal-title " id="exampleModalLabel">Profile</h5>    
                                    </div>                                                              
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>                                                                            
                            </div>
                            <div class="modal-body">
                                <div class="text-center">
                                    <img src={pf} alt='CAIC' width='100' height='100' />
                                </div>
                            <form class='px-2'>
                                <div class="form-group email-form">
                                    <input type="email" class="form-control py-2" id="exampleInputEmail2" placeholder="Username"></input>
                                </div>
                                <div class="form-group email-form">
                                    <input type="email" class="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                </div>

                                <div class="form-group form-check">
                                    <div class="row py-2 text-center">
                                        <div class="col-6">
                                            <label class="form-check-label" for="exampleCheck1">Change Password</label>
                                        </div>
                                        <div class="col-4">
                                            <label class="form-check-label" for="exampleCheck1">Log Out</label>
                                        </div>    
                                    </div>
                                </div>
                            </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row py-3">
                <div class="col-6 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class='px-3'>Evaluations</h4>
                            {evaluationList.map(evl=>{
                                return(
                                    <Evaluation_card
                                        id={evl.id}
                                        title={evl.title}
                                        staticfile_name={evl.staticfile_name}
                                        staticfile_url = {evl.staticfile_url}
                                        deadline={evl.deadline}
                                        course_id={evl.course_id}
                                        weightage={evl.weightage}
                                        total_marks={evl.total_marks}
                                        submission_allowed={evl.submission_allowed}
                                    ></Evaluation_card>
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
                <div class="col-6 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class='px-3'>Upcoming Events</h4>
                            <div class="form-check dl2 py-2 ">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            <div class="form-check dl2 py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div class="row py-3">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class='px-3'>Announcements</h4>
                            {announcementList.map(an=>{
                                return(
                                    <Announcement 
                                        id={an.id}
                                        staticfile_id={an.staticfile_id}
                                        author_id={an.author_id}
                                        title={an.title}
                                        course_id={an.course_id}
                                        createdAt={an.createdAt}
                                        body={an.body}
                                    ></Announcement>
                                )
                            })} 
                            
                            
                            
                        </div>
                    </div>
                </div>    
            </div>

            <div class="row py-3">
                <div class="col-4 ">
                    <div class="card">
                        <div class="card-body">
                            <h4 class='px-3'>Notes</h4>
                            <div class="row">
                                <div class="col-2 icon-block1">
                                    <img src={notes} alt='CAIC' width='30' height='30' />
                                </div>
                                <div class="col-9 py-2">
                                    Note1
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 icon-block1">
                                    <img src={notes} alt='CAIC' width='30' height='30' />
                                </div>
                                <div class="col-9 py-2">
                                    Note1
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 icon-block1">
                                    <img src={notes} alt='CAIC' width='30' height='30' />
                                </div>
                                <div class="col-9 py-2">
                                    Note1
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="card">
                        <div class="card-body">
                            <h4 class='px-3'>Posts And Comments</h4>
                                {postsList.map((content)=>{
                                <div class="card my-3">
                                    <div class="card-body">

                                        {content['title']}
                                        {content.body}
                                    </div>
                                </div>
                                })}
                                
                                <div class="card my-3">
                                    <div class="card-body">
                                        This is some text within a card body.
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