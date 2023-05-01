
import React from 'react';
import { useRef } from 'react'
import Nav from "../../components/navbar/admin_nav"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import add_icon from "../../images/add_icon.png"
import edit_icon from "../../images/edit_icon.png"
import { useParams } from 'react-router-dom';
import axios from 'axios'
import pdf from "../../images/pdf.png"
import { ReactSession } from 'react-client-session';

export default function Notes_add() {
    const parms = useParams()
    const course_id = parms.course_id
    // console.log(course_id)
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    const inputRef = useRef(null);
    function handleClick() {
        inputRef.current.click();
    }
    const handleFileChange = event => {
        const fileObj = event.target.files[0];
        const formData = new FormData();

        formData.append('file', fileObj);
        formData.append('course_id', course_id)


        fetch(

            'http://10.17.6.4/static',

            {

                method: 'POST',

                body: formData,

            }

        )

            .then((response) => response.json())

            .then((result) => {


                axios.post(`http://10.17.6.4/submission`, { "evaluation_id": "id", "staticfile_id": result.id }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`

                    }
                }, { withCredentials: true })
                    .then(res => {
                        alert("File submitted successfully!")
                        console.log(res)
                    })
            })

            .catch((error) => {

                console.error('Error:', error);

            });
    }
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
                                <h3 class='text-center my-2'>Add Notes</h3>
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
                        <h5 class='mb-3'>Uploaded notes</h5>
                        <div class="card my-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <h5>Lecture 2</h5>

                                    </div>
                                    <div class="col-2">
                                        <div class="row px-3">
                                            <div class="col-3 pt-2">
                                                <a type="button" href='/admin/notes/{id}/edit' >
                                                    <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                                </a>
                                            </div>
                                            <div class="col-9 pt-2">
                                                Edit
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="row px-3">
                                            <div class="col-3 pt-1">
                                                <a type="button" href='/admin/notes/{id}/edit' >
                                                    <img src={pdf} alt='CAIC' width='20' height='20' />
                                                </a>
                                            </div>
                                            <div class="col-9 pt-2">
                                                PDF
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="card my-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6">
                                        <h5>Lecture 2</h5>

                                    </div>
                                    <div class="col-2">
                                        <div class="row px-3">
                                            <div class="col-3 pt-2">
                                                <a type="button" href='/admin/notes/{id}/edit' >
                                                    <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                                </a>
                                            </div>
                                            <div class="col-9 pt-2">
                                                Edit
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="row px-3">
                                            <div class="col-3 pt-1">
                                                <a type="button" href='/admin/notes/{id}/edit' >
                                                    <img src={pdf} alt='CAIC' width='20' height='20' />
                                                </a>
                                            </div>
                                            <div class="col-9 pt-2">
                                                PDF
                                            </div>


                                        </div>
                                    </div>

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