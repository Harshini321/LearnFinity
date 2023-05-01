import React from 'react';
import notes from "../images/notes.png"
import axios from "axios"
import "./notes_card.css"
export default function Note(props) {
  async function downloadFile() {

    await axios.get(`http://10.17.6.4/staticfile/${props.id}`, {
      responseType: "blob", headers: {
        'Content-Type': 'application/json',


      }
    }, { withCredentials: true })
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', props.name);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
  }
  return (
    <div class="row my-1">
      <div class="col-2 icon-block1 mt-2">
        <img src={notes} alt='CAIC' width='30' height='30' />
      </div>
      <div class="col-9 py-2 mt-2">
        {/* {console.log(props.id, props.name)} */}
        <li onClick={downloadFile}><u><font color="black">{props.name}</font></u></li>
      </div>
    </div>
  );
}
