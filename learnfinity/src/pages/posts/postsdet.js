
import React, { useState, useEffect } from 'react';
import './posts.css';
import axios from "axios"

import spk from '../../images/speaker.png';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import Single_post_card from '../../components/single_post_card';
import Single_comment_card from '../../components/single_comment_card';
import { ReactSession } from 'react-client-session';
import { useNavigate, useParams } from 'react-router-dom';

export default function PostsDet() {
    const navigate = useNavigate()
    const parms = useParams()
    const post_id = parms.post_id
    const [postObj, setPost] = useState({})
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({})
    const [commentsList, setCommentList] = useState([]);
    const [src, setSrc] = useState("")
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');


    useEffect(() => {
        axios.get(`http://10.17.6.4/post/id/${post_id}`, {
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
                setPost(res.data.post)

            })
    }, [])
    const [newComment, setNewComment] = useState("");
    useEffect(() => {
        axios.get(`http://10.17.6.4/comment/post/${post_id}`, {
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
                setCommentList(res.data.comments_list.reverse())

            })
    }, [])
    const handleClick = () => {
        console.log(newComment)
        axios
            .post("http://10.17.6.4/tts", {
                "text": newComment
            },
                {
                    responseType: "blob", headers: {
                        'Content-Type': 'application/json',

                    }
                })
            .then((response) => {
                if (response.data.error) {
                    console.log(response);
                    alert("User not authenticated");
                }
                else {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    setSrc(url)
                    const tmp = new Audio(src); //passing your state (hook)
                    tmp.play()
                }

            });
    };

    const askGPT = () => {
        axios
            .post("http://10.17.6.4/askgpt", {
                "text": newComment
            },
                {
                    headers: {
                        'Content-Type': 'application/json',

                    }
                })
            .then((response) => {
                if (response.data.error) {
                    console.log(response);
                    alert("User not authenticated");
                }
                else {
                    alert(response.data.text)
                }

            });
    }
    const addComment = () => {
        axios
            .post("http://10.17.6.4//comment", {
                "body": newComment,
                "parentpost_id": post_id,
                "static_files": []
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`

                    }
                })
            .then((response) => {
                if (response.data.error) {
                    // console.log(response);
                    alert("User not authenticated");
                }
                else {
                    window.location.reload()
                }

            });
    };
    const handleChange = (event) => {
        setFormData(event.target.value)
        // console.log(formData)
    }
    const handleSubmit = (event) => {
        // console.log("haanji")
    }
    return (
        <div className='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">
                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>Posts and Comments</h2></div>
                    <profile_comp></profile_comp>
                </div>
                {/* {console.log(postObj)} */}
                <div class="card px-3 py-2">
                    <Single_post_card
                        id={postObj.id}
                        title={postObj.title}
                        body={postObj.body}
                        createdAt={postObj.createdAt}
                        author_name={postObj.author_name}
                        static_files={postObj.static_files}
                    ></Single_post_card>
                    <div class="col-11 pt-1 px-3"><h4>Comments</h4></div>

                    <div class="card-body">
                        <div class="row">
                            <div class="card">
                                <div class="card-body">
                                    <div class="form-group">
                                        <textarea
                                            rows="3"
                                            type="text"
                                            class="form-control"
                                            placeholder="Comment..."
                                            autoComplete="off"
                                            value={newComment}
                                            onChange={(event) => {
                                                setNewComment(event.target.value);
                                            }}
                                        />
                                    </div>
                                    <div class="row">
                                        <div class="col-8"></div>
                                        <div class="col-4">
                                            <div class="row mb-3">
                                                <div class="col-3">
                                                </div>
                                                <div class="col-12">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <button onClick={addComment} className='btn btn-outline-dark btn-sm mt-3'> Add Comment</button>
                                                        </div>
                                                        <div class="col-4">
                                                            <button onClick={askGPT} className='btn btn-outline-dark btn-sm mt-3'> Ask GPT!</button>
                                                        </div>
                                                        <div class="col-2 mt-3">
                                                            <a className='navbar-brand nav-logo ' href='#'>
                                                                <img src={spk} onClick={handleClick} alt='CAIC' width='20' height='20' />
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            {commentsList.map((comment, key) => {
                                // { console.log(comment) }
                                return (
                                    <Single_comment_card
                                        body={comment.body}
                                        id={comment.id}
                                        createdAt={comment.createdAt}
                                        author_name={comment.author_name}
                                    ></Single_comment_card>
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