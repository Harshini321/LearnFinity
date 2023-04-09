import React from 'react'
import nt from "../images/notes.png"
function Eval_card(props) {
  return (
    <div class="card my-3">
        <div class="card-body">
            <div class="row px-3">
                <div class="col-3">
                    <div class="row">
                        <div class="col-3 icon-block">
                            <img src={nt} alt='CAIC' width='40' height='40' />
                        </div>
                        <div class="col-9 pt-2">
                            <h5>{props.course_id} : {props.title}</h5>
                        </div>
                    </div>

                </div>
                <div class="col-9">
                    <div class="row">
                        <div class="col-8 pt-2">
                            
                        </div>
                        <div class="col-4 pt-2">
                            <h6>Due Date - {props.deadline}</h6>
                        </div>
                    </div>    
                </div>
            </div>
            <div class="row px-3">
                <div class="col-12">
                    {props.content}
                </div>
                <div class="col-6">
                <p class='py-1 px-2'> Weightage : {props.weightage}</p>
                </div>
                <div class="col-6">
                <p class='py-1 px-2'> Total Marks : {props.total_marks}</p>
                </div>
            </div>
            <div class="row px-3">

                <div class="col-2 px-3">
                        <a href="/eval_submission" class="btn btn-primary btn-sm" className="btn btn-primary  loginbtn" role="button" aria-disabled="true">Submit</a>
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-outline-primary signupbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Download
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eval_card