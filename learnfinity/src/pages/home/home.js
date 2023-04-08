import React from 'react';
import './home.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import CourseCard from "../../components/course_card/coursecard"
import axios from 'axios';
import dl from "../../images/deadline.png"
import quiz from "../../images/quiz.png"
import lab from "../../images/lab.png"
import nf from "../../images/notification.png"
import ann from "../../images/ann.png"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Announcement from '../../components/announcement_card';
export default function Home() {
    const history = useNavigate();
    function detailCourse(id){
        history(`/course/${id}`);
    }
    const [courseList, setCourseList] = useState([]);
    const [pastCourseList, setPastCourseList] = useState([]);
    const [presentCourseList, setPresentCourseList] = useState([]);
    const [announcementList, setAnnouncementList] = useState([]);
    
    useEffect(() =>
    {
        axios.get('http://localhost:5000/courses',  {withCredentials: true })
        .then(res => {
            console.log(res.data.courses)
            console.log("courselist")
            setCourseList(res.data.courses)
        })
    }, [])
    useEffect(() =>
    {
        axios.get('http://localhost:5000/courses/past', {withCredentials: true})
        .then(res => {
            console.log(res.data.courses)
            console.log("courselist")
            setPastCourseList(res.data.courses)
        })
    }, [])
    useEffect(() =>
    {
        axios.get('http://localhost:5000/courses/present', {withCredentials: true })
        .then(res => {
            console.log(res.data.courses)
            console.log("courselist")
            setPresentCourseList(res.data.courses)
        })
    }, [])
    useEffect(() =>
    {
        axios.get('http://localhost:5000/announcement', {withCredentials: true })
        .then(res => {
            console.log(res.data.announcement_list)
            console.log("courselist")
            setAnnouncementList(res.data.announcement_list)
        })
    }, [])
    
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>Welcome back, Sakshi! </h2></div>
                <Profile_comp></Profile_comp>
            </div>
            <div class="row">
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
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>Deadlines</h4>
                            <div class="form-check dl py-2 ">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            <div class="form-check dl py-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    COP 290-lab3 Weightage 50%
                                </label><br></br>
                                <small>15 March</small>
                            </div>
                            <div class="form-check dl py-2">
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
                            <h4 className='px-3'>Announcements</h4>
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
                            <div class="card my-2">
                                <div class="card-body">
                                    <div class="row px-3">
                                        <div class="col-3">
                                            <div class="row">
                                                <div class="col-3 icon-block">
                                                    <img src={ann} alt='CAIC' width='40' height='40' />
                                                </div>
                                                <div class="col-9">
                                                    New Assignment<br></br>
                                                    COP 290
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-9">

                                        </div>
                                    </div>
                                    <div class="row px-3">
                                        <div class="col-12">
                                        <p className='py-2 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>    
            </div>


            <div class="row py-3">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 className='px-3'>Courses</h4> 
                            <div class="row py-3">
                            {presentCourseList.map(course=>{
                                return <CourseCard
                                    
                                        name={course.name}
                                        description={course.description}
                                        id={course.id}
                                        semester={course.semester}
                                        year={course.year}
                                        credits={course.credits}
                                        type={course.type}
                                        insti_id={course.insti_id}
                                        slot_id={course.slot_id}
                                        onDetail={detailCourse}
                                    ></CourseCard>
                                })}
                                {/* <div class="col-4 px-3"> */}
                                    <CourseCard></CourseCard>
                                {/* </div> */}
                                {/* <div class="col-4 px-3"> */}
                                    <CourseCard></CourseCard>
                                {/* </div> */}
                                {/* <div class="col-4 px-3"> */}
                                    <CourseCard></CourseCard>
                                {/* </div> */}
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