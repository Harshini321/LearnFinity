
import React from 'react';
import Nav from "../../components/navbar/admin_nav"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import add_icon from "../../images/add_icon.png"
import edit_icon from "../../images/edit_icon.png"
import grade_icon from "../../images/grade_icon.png"
import pdf from "../../images/pdf.png"
import Uploaded_assing_card from './admin_components/uploaded_assing_card';
export default function Assignment_add() {
    return (
        <div class='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">
                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>COP 290</h2></div>
                    <Profile_comp></Profile_comp>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="row text-center">
                            <div class="col-4"></div>
                            <div class="col-3">
                                <h3 class='text-center my-2'>Add Assignment</h3>
                            </div>
                            <div class="col-1 mt-2">
                                <a type="button" href='/admin/notes/add' >
                                    <img src={add_icon} alt='CAIC' width='35' height='35' />
                                </a>
                            </div>
                            <div class="col-3"></div>
                        </div>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class=''>Uploaded assignments</h5>
                        <hr></hr>
                        <Uploaded_assing_card></Uploaded_assing_card>
                        <Uploaded_assing_card></Uploaded_assing_card>
                        <Uploaded_assing_card></Uploaded_assing_card>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
}