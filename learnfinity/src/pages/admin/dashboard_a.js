import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from "../../components/navbar/admin_nav"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import CourseCard from "../../components/course_card/coursecard"
import add_icon from "../../images/add_icon.png"
import edit_icon from "../../images/edit_icon.png"
import grade_icon from "../../images/grade_icon.png"
import pdf from "../../images/pdf.png"
import dl from "../../images/deadline.png"
import quiz from "../../images/quiz.png"
import lab from "../../images/lab.png"
import nf from "../../images/notification.png"
import ann from "../../images/ann.png"
import Add_note from './admin_components/add_note';
import Add_ann from './admin_components/add_ann';
import Add_assign from './admin_components/add_assign';
import Add_post from './admin_components/add_post';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import Note from '../../components/notes_card';
import Evaluation_card from '../../components/evaluation_card';
import Announcement from '../../components/announcement_card';
import Posts_card from '../../components/posts_card';
export default function Dashboard_a() {
    const navigate = useNavigate()
    const parms = useParams()
    const course_id = parms.course_id
    const [coursedetail, setCourseDetails] = useState({})
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    const [announcementList, setAnnouncementList] = useState([]);
    const [evaluationList, setEvaluationList] = useState([]);
    const [postsList, setPostList] = useState([]);
    const [notesList, setNotesList] = useState([])
    useEffect(() => {
        axios.get(`http://10.17.6.4/courses/id/${course_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                setCourseDetails(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get(`http://10.17.6.4/announcement/${course_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                // console.log(res.data.announcement_list)
                // console.log("courselist")
                setAnnouncementList(res.data.announcement_list.reverse().splice(0, 3))
            })
    }, [])
    useEffect(() => {
        axios.get(`http://10.17.6.4/notes/${course_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                // console.log(res.data.notes)
                // console.log("courselist")
                setNotesList(res.data.notes.reverse().splice(0, 3))
            })
    }, [])
    useEffect(() => {
        axios.get(`http://10.17.6.4/evaluation/${course_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                setEvaluationList(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get(`http://10.17.6.4/post/${course_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                if (res.data.status_code != 200) {
                    alert(res.data.message)
                    navigate("/dashboard")
                }
                // console.log(res.data.posts_list)
                setPostList(res.data.posts_list.reverse().splice(0, 3))

            })
    }, [])
    return (
        <div class='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">
                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>{coursedetail.name}</h2></div>
                    <Profile_comp></Profile_comp>
                </div>
                <div class="row">
                    <div class="col-6 my-3">
                        <div class="card">
                            <div class="card-body ">
                                <h4 class='px-3'>Lecture Notes </h4>
                                <hr></hr>
                                <div class="row px-3">
                                    <div class="col-9">
                                        <p class='px-3'>Add Notes</p>
                                    </div>
                                    <div class="col-3">
                                        <a type="button" href={"/notes/" + course_id + "/new"} >
                                            <img src={add_icon} alt='CAIC' width='25' height='25' />
                                        </a>
                                    </div>
                                    <hr></hr>
                                </div>
                                {notesList.map((an, key) => {
                                    return (
                                        <Note id={an.id}
                                            name={an.name}
                                        ></Note>)
                                })}
                                {/* <Add_note></Add_note>
                            <Add_note></Add_note> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-3">
                        <div class="card">
                            <div class="card-body ">
                                <h4 class='px-3'>Assignments</h4>
                                <hr></hr>
                                <div class="row px-3">
                                    <div class="col-9">
                                        <p class='px-3'>Add Assignments</p>
                                    </div>

                                    <div class="col-3">
                                        <a type="button" href={"/assignment/" + course_id + "/new"}  >
                                            <img src={add_icon} alt='CAIC' width='25' height='25' />
                                        </a>
                                    </div>
                                    <hr></hr>
                                </div>


                                {/* <Add_assign></Add_assign> */}
                                {evaluationList.map(evl => {
                                    return (
                                        <Evaluation_card
                                            id={evl.id}
                                            title={evl.title}
                                            staticfile_name={evl.staticfile_name}
                                            staticfile_url={evl.staticfile_url}
                                            staticfile_id={evl.staticfile_id}
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
                </div>


                <div class="row">


                    <div class="row py-3">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class='px-3'>Announcements</h4>
                                    <hr></hr>
                                    <div class="row px-3">
                                        <div class="col-9">
                                            <p class='px-3'>Add Announcements</p>
                                        </div>
                                        <div class="col-3">
                                            <a type="button" href={"/announcement/" + course_id + "/new"} >
                                                <img src={add_icon} alt='CAIC' width='25' height='25' />
                                            </a>
                                        </div>

                                    </div>
                                    {announcementList.map(an => {
                                        return (
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
                                    <a className='link-dark' href={"/announcement/" + course_id}>More...</a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card my-3 mx-3">
                    <div class="card-body">
                        <h4 class='px-3'>Posts And Comments</h4>
                        <hr></hr>
                        <div class="row px-3">
                            <div class="col-9">
                                <p class='px-3'>Add Post</p>
                            </div>

                            <div class="col-3">
                                <a type="button" href={"/posts/" + course_id + "/new"} >
                                    <img src={add_icon} alt='CAIC' width='25' height='25' />
                                </a>
                            </div>
                            <hr></hr>
                        </div>
                        {postsList.map((post, key) => {
                            { console.log(post) }
                            return (

                                <Posts_card title={post.title}
                                    body={post.body} id={post.id}></Posts_card>
                            )
                        })}
                        <a className='link-dark' href={"/posts/" + course_id}>More...</a>

                    </div>
                </div>


                
            </div>
            <Footer></Footer>
        </div>
    );
}