import React from 'react';
import './navbar.css';
import logo from '../../images/lf_logo.png';
import db from '../../images/dashboard.png';
import books from '../../images/books.png';
import grade from '../../images/grade.png';
import ann from "../../images/ann.png"
import sd from "../../images/schedule.png"
export default function nav() {
  return (      
        <div class="col-2 side-nav ">
            <a className='navbar-brand nav-logo' href='/'>
                <img src={logo} alt='CAIC' width='100' height='60' />
            </a>
            <div class="row py-2">
                <div class="col-2">    
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-2">
                            <img src={db} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/dashboard" class="link-light nav-header">Dashboard</a>
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
                            <img src={books} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/courses" class="link-light nav-header">Courses</a>
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
                            <a href="/grades" class="link-light nav-header">Grades</a>
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
                            <img src={ann} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/announcement" class="link-light nav-header">Announcements</a>
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
                            <img src={sd} alt='CAIC' width='20' height='20' />
                        </div>
                        <div class="col-8 ">
                            <a href="/schedule" class="link-light nav-header">Schedule</a>
                        </div>
                    </div>      
                </div>
                <div class="col-2"></div>
            </div>
        </div>
  );
}