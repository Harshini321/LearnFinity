
import React, { useState, useEffect, useReducer } from 'react';
import './notes.css';
import { useParams } from 'react-router-dom';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import Profile_comp from '../../components/profile';
import Note from '../../components/notes_card';
export default function Notes() {
    const navigate = useNavigate()
    const parms = useParams()
    const course_id = parms.course_id
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    const [notesList, setNotesList] = useState([])
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
    return (
        <div class='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">
                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>Notes</h2></div>
                    <Profile_comp></Profile_comp>
                </div>
                <div class="card col-6">
                    <div class="card-body">

                        {notesList.map((an, key) => {
                            return (
                                <Note id={an.id}
                                    name={an.name}
                                ></Note>)
                        })}


                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>

    );
}