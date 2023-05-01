
import React, { useState, useEffect } from 'react';
import './posts.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import axios from 'axios';
import Posts_card from '../../components/posts_card';
import { ReactSession } from 'react-client-session';
import { useNavigate, useParams } from 'react-router-dom';
export default function Posts() {
    const navigate = useNavigate()
    const parms = useParams()
    const course_id = parms.course_id
    console.log(course_id)
    const [postsList, setPostList] = useState([]);
    const [course, setCourse] = useState({});
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    const history = useNavigate();
    function detailCourse(id) {
        history(`/postdet/${id}`);
    }
    useEffect(() => {
        axios.get(`http://10.17.6.4/post/${course_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        }, { withCredentials: true })
            .then(res => {
                if (res.data.status_code != 200) {
                    alert(res.data.message)
                    navigate("/dashboard")
                }
                console.log(res.data.posts_list)
                setCourse(res.data)
                setPostList(res.data.posts_list)

            })
    }, [])

    return (
        <div className='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">

                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>{course.course_name} : Posts and Comments </h2></div>
                    <profile_comp></profile_comp>
                </div>
                <div class="col-2 mx-2">
                    <a type="button" class="btn btn-primary loginbtn" href={"/posts/" + course_id + "/new"}>
                        Add New Post
                    </a>
                </div>
                <div class="row py-3">
                    <div class="col-12">
                        <div class="row py-3 px-2">

                            {postsList.map((post, key) => {
                                { console.log(post) }
                                return (
                                    <Posts_card
                                        title={post.title}
                                        body={post.body}
                                        id={post.id}
                                        onDetail={detailCourse}
                                    ></Posts_card>
                                )
                            })}

                        </div>

                    </div>

                </div>
                

            </div>
            <Footer></Footer>
        </div>
    );
}