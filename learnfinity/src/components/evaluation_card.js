import React from 'react'

function Evaluation_card(props) {
  return (
    <div>
        <div class="form-check dl2 py-2 ">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
                {props.title} Weightage:{props.weightage}
            </label><br></br>
            <small>{props.deadline}</small>
        </div>
    </div>
  )
}

export default Evaluation_card