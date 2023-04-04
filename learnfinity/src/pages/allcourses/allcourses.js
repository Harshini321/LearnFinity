
import React from 'react';
import './allcourses.css';
import logo from '../../images/course.png';
import Nav from "../../components/navbar/navbar"
import CourseCard from "../../components/course_card/coursecard"
import Footer from "../../components/footer/footer"
export default function allCourses() {
  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">
            
            <div class="row course">
                <h3>Courses</h3>
                <div class="row py-3">
                    <div class="col-4">
                        <CourseCard></CourseCard>
                    </div>
                    <div class="col-4">
                        <CourseCard></CourseCard>
                    </div>
                    <div class="col-4">
                        <CourseCard></CourseCard>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-4">
                        <CourseCard></CourseCard>
                    </div>
                    <div class="col-4">
                        <CourseCard></CourseCard>
                    </div>
                    <div class="col-4">
                        <CourseCard></CourseCard>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-2"></div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-4 text-center"> 
                                <button type="button" class="btn btn-info">Past</button>
                            </div>
                            <div class="col-4 text-center">
                                <button type="button" class="btn btn-info">Present</button>
                            </div>
                            <div class="col-4 text-center">
                                <button type="button" class="btn btn-info">Future</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    </div>
  );
}