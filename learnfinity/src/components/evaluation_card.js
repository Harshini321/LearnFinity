import React from 'react'
import axios from "axios"
function Evaluation_card(props) {
  async function downloadFile() {

    await axios.get(`http://10.17.6.4/staticfile/${props.staticfile_id}`, {
      responseType: "blob", headers: {
        'Content-Type': 'application/json',


      }
    }, { withCredentials: true })
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', props.staticfile_name);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
  }
  return (
    <div>
      {/* {console.log(props)} */}
      <div class="form-check dl2 py-2 ">
        <div class="row">
          <div class="col-6">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <strong>{props.title}</strong>
            <br></br>
            <li onClick={downloadFile}><u><font color="black">{props.staticfile_name}</font></u></li>
          </div>
          <div class="col-6">
            <strong>Weightage:{props.weightage}%</strong>
            <br></br>
            <small><strong>Due on</strong> <font color="red" >{props.deadline}</font> </small>
          </div>
        </div>
        {/* <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        <strong>{props.title}</strong>
        <br></br>
        <li onClick={downloadFile}><u><font color="blue">{props.staticfile_name}</font></u></li>
        <br></br>
        <strong>Weightage:{props.weightage}%</strong>
        <br></br>
        <small><strong>Due on</strong> <font color="red" >{props.deadline}</font> </small> */}

      </div>
    </div>
  )
}

export default Evaluation_card