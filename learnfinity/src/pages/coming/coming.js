

import React from 'react';
import './coming.css';
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

export default function Coming() {
  return (
    <div class='container-fluid landing  min-vh-100'>
    <div class="bg-image" id="inf"></div>
   
    <div class="bg-text">
       
           
                
                <div class=" main_ttl_div coming">
                    <h1 class='main_ttl' id='coming'>COMING SOON</h1>
                </div>
                
            
        
       
       
    </div>
</div>
  );
}
