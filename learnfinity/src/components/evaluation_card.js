import React from 'react'

function Evaluation_card(props) {
  return (
    <div>
        <div class="form-check dl2 py-2 ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            {/* <label class="form-check-label" for="flexCheckDefault"> */}
                <strong>{props.title}</strong>
                <br></br>
                Download Assignment: <a href = {props.staticfile_url} download={props.staticfile_name}>{props.staticfile_name}</a>
            {/* </label>*/}
            <br></br> 
            <strong>Weightage:{props.weightage}%</strong>
            <br></br>
            <small><strong>Due on</strong> <font color="red" >{props.deadline}</font> </small>
            
        </div>
    </div>
  )
}

export default Evaluation_card