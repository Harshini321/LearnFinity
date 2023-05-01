import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import './course.css';
import { useParams } from 'react-router-dom';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import Posts_card from '../../components/posts_card';
import Announcement from '../../components/announcement_card';
import Evaluation_card from '../../components/evaluation_card';
import Note from '../../components/notes_card';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';

export default function Course_id() {
    const navigate = useNavigate()
    const parms = useParams()
    const course_id = parms.course_id
    // console.log(course_id)
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    const [ans, setAns] = useState([])
    const [announcementList, setAnnouncementList] = useState([]);
    const [evaluationList, setEvaluationList] = useState([]);
    const [postsList, setPostList] = useState([]);
    const [coursedetail, setCourseDetails] = useState({})
    const [notesList, setNotesList] = useState([])
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get('http://10.17.6.4/user', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                // console.log(res.data)
                setUser(res.data)
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
                setPostList(res.data.posts_list.reverse().splice(0, 1))

            })
    }, [])
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
    return (
        <div class='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">
                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>{coursedetail.name}</h2></div>
                    <Profile_comp></Profile_comp>
                </div>


                <div class="row py-3">
                    <div class="col-7">
                        <div class="card">
                            <div class="card-body">
                                <h4 class='px-3'><a href={'/evaluation/' + course_id} class="link-dark">Evaluation</a></h4>
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
                    <div class="col-5">
                        <div class="card">
                            <div class="card-body">
                                <h4 class='px-3'>Upcoming Events</h4>
                                <div class="form-check dl2 py-2 ">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {coursedetail.name} Assignment 1
                                    </label><br></br>
                                    {/* <small>15 March</small> */}
                                </div>
                                <div class="form-check dl2 py-2">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {coursedetail.name}    Assignment 2                            </label><br></br>
                                    {/* <small>15 March</small> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="row py-3">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class='px-3'><a href={'/announcement/' + course_id} class="link-dark">Announcements</a></h4>
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

                <div class="row py-3">
                    <div class="col-4 ">
                        <div class="card">
                            <div class="card-body">
                                <h4 class='px-3'>Notes</h4>
                                {user.is_Prof && <a type="button" class="btn btn-primary loginbtn" href={"/admin/notes/add/" + course_id}>
                                    Add Notes
                                </a>}
                                {notesList.map((an, key) => {
                                    return (
                                        <Note id={an.id}
                                            name={an.name}
                                        ></Note>)
                                })}

                                <a className='link-dark' href={"/notes/" + course_id}>More...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="card">
                            <div class="card-body">
                                <h4 class='px-3'>Posts And Comments</h4>
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
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
}