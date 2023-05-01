

import React from 'react';
import './btn.css';
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
import Cutoff_card from './admin_components/cutoff_card';

export default function Cut() {
  return (
    <div className='container-fluid dashboard row min-vh-100'>
      <Nav></Nav>
      <div class="col-10 dash">
        <div class="row">
          <div class="col-11 pb-3 pt-1"><h2>Cut-offs</h2></div>
          <Profile_comp></Profile_comp>
        </div>
        <div class="row">

          <div class="col-12">
            <div class="card mt-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-10">
                    <h5>COP 290</h5>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="card" >
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Grade</th>
                      <th scope="col">Lower Limit</th>
                      <th scope="col">Upper Limit</th>

                      <th ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <Cutoff_card></Cutoff_card>
                    <Cutoff_card></Cutoff_card>
                    <Cutoff_card></Cutoff_card>
                    <Cutoff_card></Cutoff_card>
                    <Cutoff_card></Cutoff_card>
                    <Cutoff_card></Cutoff_card>
                    <Cutoff_card></Cutoff_card>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-3">
          <div class="col-3"></div>
          <div class="col-2 px-3">
            <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Save All
            </button>
          </div>
          <div class="col-2 px-3">
            <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add
            </button>
          </div>

        </div>
      </div>
      <Footer></Footer>

    </div>
  );
}
