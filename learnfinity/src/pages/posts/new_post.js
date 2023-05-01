import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Nav from '../../components/navbar/navbar';
import { Form, Button } from 'react-bootstrap'
import { ReactSession } from 'react-client-session';
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
export default function New_post(props) {
    const navigate = useNavigate()
    const parms = useParams()
    var staticFilesArr = []
    const course_id = parms.course_id
    const [staticFiles, setSFArr] = useState([])
    const [filesArr, setFiles] = useState([])
    const [newTitle, setNewTitle] = useState("");
    const [newPost, setNewPost] = useState("");
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    async function postFiles(value) {
        const newData = new FormData()
        newData.append("file", value)
        await fetch(

            'http://10.17.6.4/static',

            {

                method: 'POST',

                body: newData,

            }

        )

            .then((response) => response.json())

            .then((result) => {
                setSFArr(staticFiles => staticFiles.push(result.id))
                staticFilesArr.push(result.id)
                console.log(staticFilesArr)

            })
        return true
    }
    async function addPost() {
        console.log(filesArr)
        for (var i = 0; i < filesArr.length; i++) {
            console.log(filesArr[i])
            const newData = new FormData()
            newData.append("file", filesArr[i])
            await fetch(

                'http://10.17.6.4/static',

                {

                    method: 'POST',

                    body: newData,

                }

            )

                .then((response) => response.json())

                .then((result) => {
                    console.log(result.id)
                    setSFArr(staticFiles => [...staticFiles, result.id])
                    staticFilesArr.push(result.id)
                    console.log(staticFilesArr)

                })

        }

    };

    async function postPost() {
        await addPost()
        console.log(staticFilesArr)
        alert("staticFiles is", staticFilesArr)
        await axios
            .post("http://10.17.6.4//post", {
                "title": newTitle,
                "body": newPost,
                "course_id": course_id,
                "static_files": staticFilesArr
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`

                    }
                })
            .then((response) => {
                if (response.data.error) {
                    console.log(response);
                    alert("User not authenticated");
                }
                else {
                    window.location.reload()
                }

            });
    }


    return (
        <div className='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-10 dash">
                <div class="row">
                    <div className='col-2'></div>
                    <div className='col-9 vertical-center1'>
                        <div class="card">
                            <div class="card-body">
                                <div className='form'>
                                    <h3 className='text-center'>Add New Post</h3>
                                    <form>
                                        <div class="form-group">

                                            <input type="text"
                                                class="form-control"
                                                placeholder="Title"
                                                autoComplete="off"
                                                value={newTitle}
                                                onChange={(event) => {
                                                    setNewTitle(event.target.value);
                                                }}
                                            ></input>
                                        </div>


                                        <div class="form-group">

                                            <textarea class="form-control"
                                                rows="3"
                                                type="text"
                                                placeholder="Content"
                                                autoComplete="off"
                                                value={newPost}
                                                onChange={(event) => {
                                                    setNewPost(event.target.value);
                                                }}
                                            ></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlFile1 " className='mx-3'>Upload File</label>
                                            <input type="file" class="form-control-file btn-sm" id="exampleFormControlFile1" name="file[]" multiple="multiple" onChange={(event) => {
                                                setFiles(event.target.files);
                                            }}></input>
                                        </div>
                                        <Form.Group className='text-center my-3'>
                                            <Button as="sub" variant="primary" className="btn btn-primary sub-btn btn-block my-3" onClick={postPost} >Post</Button>
                                        </Form.Group>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </div>

    );
}