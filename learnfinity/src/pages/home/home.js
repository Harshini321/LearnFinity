import React from 'react';
import './home.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import CourseCard from "../../components/course_card/coursecard"
import Announcement from '../../components/announcement_card';
import axios from 'axios';
import dl from "../../images/deadline.png"
import quiz from "../../images/quiz.png"
import lab from "../../images/lab.png"
import nf from "../../images/notification.png"
import { useState, useEffect } from 'react';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import 'react-cookie'
export default function Home() {
    const navigate = useNavigate();
    function detailCourse(id) {
        navigate(`/course/${id}`);
    }
    const [user, setUser] = useState({})
    const [courseList, setCourseList] = useState([]);
    const [pastCourseList, setPastCourseList] = useState([]);
    const [presentCourseList, setPresentCourseList] = useState([]);
    const [announcementList, setAnnouncementList] = useState([]);
    const [evaluationList, setEvaluationList] = useState([]);
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    useEffect(() => {
        axios.get('http://10.17.6.4/user', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get('http://10.17.6.4/courses/present', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                console.log(res.data.courses)
                console.log("courselist")
                setPresentCourseList(res.data.courses)
            })
    }, [])
    useEffect(() => {
        axios.get('http://10.17.6.4/announcement', { headers: { Authorization: `Bearer ${token}` } }, { withCredentials: true })
            .then(res => {
                console.log(res.data.announcement_list)
                console.log("courselist")
                setAnnouncementList(res.data.announcement_list.reverse().splice(0, 3))
            })
    }, [])
    useEffect(() => {
        axios.get('http://10.17.6.4/evaluations', {
            headers: {
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setEvaluationList(res.data)
            })
    }, [])
    return (
        <div className='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">
                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>Welcome back, {user.name}! </h2></div>
                    <Profile_comp></Profile_comp>
                </div>
                {!user.is_Prof && <div class="row">
                    <div class="col-8">
                        <div class="card">
                            <div class="card-body ">
                                <h4 className='px-3'>Overview</h4>
                                <div class="row px-3">
                                    <div class="col-4 py-3">
                                        <div class="row">
                                            <div class="col-3 icon-block">
                                                <img src={dl} alt='CAIC' width='50' height='40' />
                                            </div>
                                            <div class="col-9">
                                                Deadlines<br></br>3
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-4 py-3">
                                        <div class="row">
                                            <div class="col-3 icon-block">
                                                <img src={quiz} alt='CAIC' width='35' height='40' />
                                            </div>
                                            <div class="col-9">
                                                Upcoming Quizes<br></br>3
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 py-3">
                                        <div class="row">
                                            <div class="col-3 icon-block">
                                                <img src={lab} alt='CAIC' width='40' height='40' />
                                            </div>
                                            <div class="col-9">
                                                Lab Reports<br></br>3
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 py-3">
                                        <div class="row">
                                            <div class="col-3 icon-block">
                                                <img src={nf} alt='CAIC' width='35' height='40' />
                                            </div>
                                            <div class="col-9">
                                                Notifications<br></br>3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 ">
                        {!user.is_Prof && <div class="card">
                            <div class="card-body">
                                <h4 className='px-3'>Upcoming Deadlines</h4>
                                {evaluationList.map(evaln => {
                                    let ctr = 0;
                                    if (Date.parse(evaln.deadline) > Date.now() && ctr < 3) {
                                        ctr++;
                                        return (
                                            <div class="form-check dl py-2 ">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    {evaln.title}: {evaln.course_name}
                                                </label><br></br>
                                                <small>{evaln.deadline}</small>
                                            </div>)
                                    }
                                })}

                            </div>
                        </div>}
                    </div>
                </div>}
                <div class="row py-3">
                    <div class="col-12">
                        {!user.is_Prof && <div class="card">
                            <div class="card-body">
                                <h4 className='px-3'>Announcements</h4>
                                {/* {user.is_Prof && <h4 className='px-3'>Announcements</h4>} */}
                                {!user.is_Prof && announcementList.map(an => {
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
                                <h5><a href="/announcement" class="link-dark mx-3">More...</a></h5>
                            </div>
                        </div>}
                    </div>
                </div>


                <div class="row py-3">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 className='px-3'>Courses</h4>
                                <div class="row py-3" justify-content="center">
                                    {presentCourseList.map((course, key) => {
                                        return <CourseCard
                                            key={key}
                                            name={course.name}
                                            description={course.description}
                                            id={course.id}
                                            semester={course.semester}
                                            year={course.year}
                                            credits={course.credits}
                                            type={course.type}
                                            image={course.image}
                                            insti_id={course.insti_id}
                                            slot_id={course.slot_id}
                                            onDetail={detailCourse}
                                        ></CourseCard>
                                    })}
                                    <h5><a href="/courses" class="link-dark mx-3">More...</a></h5>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
}