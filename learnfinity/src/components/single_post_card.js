import React, { useState, useEffect } from 'react';
import axios from "axios"
export default function single_post_card(props) {
  async function renderFile(fileId) {

    await axios.get(`http://10.17.6.4/staticfile/${fileId}`, {
      responseType: "blob", headers: {
        'Content-Type': 'application/json',


      }
    }, { withCredentials: true })
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
      })
  }


  return (
    <div class="card-body">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{props.title}</h4>
            {/* <h6 class="card-subtitle mb-2 text-muted">{props.course_id}</h6> */}
            <p class="card-text">{props.body}</p>
            {/* {console.log("here")}
            {console.log(props.static_files)} */}
            {props.static_files && props.static_files.map(id => {
              const [file, setFile] = useState({})
              useEffect(() => {
                axios.get(`http://10.17.6.4/static/${id}`, { withCredentials: true })
                  .then(res => {
                    // console.log(res.data)
                    setFile(res.data)
                  })
              }, [])
              async function renderFile() {


                await axios.get(`http://10.17.6.4/staticfile/${id}`, {
                  responseType: "blob", headers: {
                    'Content-Type': 'application/json',


                  }
                }, { withCredentials: true })
                  .then(res => {
                    const url = window.URL.createObjectURL(new Blob([res.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', file.name);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  })
              }
              return (
                <li onClick={renderFile}><u><font color="blue"><img id="#imageid${id}" />{file.name}</font></u></li>
              )
            })}
            <small class="card-link link-dark text-muted">Posted By : {props.author_name}</small>
            <small class="card-link link-dark text-muted">Date : {props.createdAt}</small>
          </div>
        </div>
      </div>
    </div>
  );
}