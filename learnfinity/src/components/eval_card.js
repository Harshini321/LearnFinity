import React from 'react'
import { useRef } from 'react'
import nt from "../images/notes.png"
import "./notes_card.css"
import axios from 'axios';
import { ReactSession } from 'react-client-session';

function Eval_card(props) {
    ReactSession.setStoreType('localStorage');
    const token = ReactSession.get('access_token');
    const inputRef = useRef(null);
    async function downloadFile() {

        await axios.get(`http://10.17.6.4/staticfile/${props.staticfile_id}`, {
            responseType: "blob", headers: {
                'Content-Type': 'application/json',


            }
        }, { withCredentials: true })
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                window.open(url)
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', props.staticfile_name);
                document.body.appendChild(link);
                link.click();
                link.remove();
            })
    }
    function handleClick() {
        inputRef.current.click();
    }
    const handleFileChange = event => {
        const fileObj = event.target.files[0];
        const formData = new FormData();

        formData.append('file', fileObj);
        formData.append('course_id', props.course_id)


        fetch(

            'http://10.17.6.4/static',

            {

                method: 'POST',

                body: formData,

            }

        )

            .then((response) => response.json())

            .then((result) => {


                axios.post(`http://10.17.6.4/submission`, { "evaluation_id": props.id, "staticfile_id": result.id }, {
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

        // console.log('fileObj is', fileObj);

        // 👇️ reset file input
        event.target.value = null;

        // 👇️ is now empty
        // console.log(event.target.files);

        // 👇️ can still access file object here
        // console.log(fileObj);
        // console.log(fileObj.name);
    };
    return (

        <div class="card my-3">
            <div class="card-body">
                <div class="row px-3">
                    <div class="col-6">
                        <div class="row">
                           
                            <div class="col-2 icon-block">
                                <img src={nt} alt='CAIC' width='40' height='40' />
                            </div>
                            <div class="col-9 pt-2 mt-2">
                                <h5><strong>{props.title}</strong></h5>
                            </div>
                        </div>

                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-5 pt-2">

                            </div>
                            <div class="col-7 pt-2 mt-2">
                            <small><strong>Due on</strong> <font color="red" >{props.deadline}</font> </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row px-3">
                    <div class="col-12 mx-3">
                    <h6><small class="text-muted mx-3">{props.content}</small></h6>
                    </div>
                    <div class="col-3 mx-3 px-3">
                        <p class='py-1 px-2'> <strong>Weightage:{props.weightage}%</strong></p>
                    </div>
                    <div class="col-4">
                        <p class='py-1 px-2'> <strong>Total Marks:{props.total_marks}</strong></p>
                    </div>
                </div>
                <div class="row px-3">
                    {Date.parse(props.deadline) > Date.now() &&
                        <div class="col-2 px-3">
                            <input
                                style={{ display: 'none' }}
                                ref={inputRef}
                                type="file"
                                onChange={handleFileChange}
                            />
                            <button type="button" class="btn btn-sm btn-primary loginbtn mx-3" onClick={handleClick}>
                                Submit
                            </button>
                        </div>}
                    {props.staticfile_id &&
                        <div class="col-2">
                            <button type="button" class="btn btn-sm btn-outline-primary signupbtn" >
                                <li onClick={downloadFile}><u><font color="black">Download</font></u></li>
                            </button>
                        </div>}

                </div>
            </div>
        </div>
    )
}

export default Eval_card