import React from 'react';
import ann from "../images/ann.png"

export default function Announcement(props) {
  return (
    <div class="card my-3">
        <div class="card-body">  
            <div class="row px-3">
                <div class="col-3">
                    <div class="row">
                        <div class="col-3 icon-block">
                            <img src={ann} alt='CAIC' width='40' height='40' />
                        </div>
                        <div class="col-9">
                            {props.title}<br></br>
                            {props.course_id} {props.createdAt}
                        </div>
                    </div>
                </div>
                <div class="col-9">
                </div>
            </div>
            <div class="row px-3">
                <div class="col-12">
                <p class='py-2 px-2'>{props.body}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
