import React, { useState, useEffect } from 'react';
import spk from '../images/speaker.png';
import axios from "axios"
export default function Single_comment_card(props) {
  const [src, setSrc] = useState("")
  const handleClick = () => {
    axios
      .post("http://10.17.6.4/tts", {
        "text": props.body
      },
        {
          responseType: "blob", headers: {
            'Content-Type': 'application/json',

          }
        })
      .then((response) => {
        if (response.data.error) {
          // console.log(response);
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
  return (
    <div class="card my-2">
      <div class="card-body">
        <div class="row">
          <div class="col-10">
            <p class="card-text">{props.body}</p>
            <p className="text-muted">{props.author_name}, on {props.createdAt}</p>
          </div>
          <div class="col-2">
            <a className='navbar-brand nav-logo ' href='#'>
              <img src={spk} onClick={handleClick} alt='CAIC' width='20' height='20' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}