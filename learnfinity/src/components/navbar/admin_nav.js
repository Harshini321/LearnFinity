import React from 'react';
import './navbar.css';
import logo from '../../images/lf_logo.png';
import db from '../../images/dashboard.png';
import books from '../../images/books.png';
import grade from '../../images/grade.png';
import nt from "../../images/notes.png";

import ann from "../../images/ann.png"
import sd from "../../images/schedule.png"
export default function admin_nav() {
    return (
        <div class="col-2 side-nav ">
            <a className='navbar-brand nav-logo' href='/admin'>
                <img src={logo} alt='CAIC' width='100' height='60' />
            </a>
            <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={books} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin" class="link-light nav-header">Choose Course</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>

            <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={grade} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/minor" class="link-light nav-header">Minor Grading</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>


            <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={grade} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/major" class="link-light nav-header">Major Grading</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>


            {/* <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={ann} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/announcement/" class="link-light nav-header">Announcements</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div> */}


            {/* <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={nt} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/notes/add" class="link-light nav-header">Notes</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div> */}


            {/* <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={grade} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/assignment/add" class="link-light nav-header">Assignments</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div> */}





            {/* <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={nt} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/enrolled" class="link-light nav-header">Enrolled Students</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div> */}


            {/* <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={grade} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/course_tot" class="link-light nav-header">Course Total</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div> */}


            <div class="row py-2">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={grade} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/admin/cut" class="link-light nav-header">Cut-offs</a>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    );
}