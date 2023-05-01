import React, { useState, useEffect } from 'react';
import './coursecard.css';
import logo from '../../images/course.png';
export default function coursecard(props) {
  function handleClick() {
    props.onDetail(props.id)
  }
  return (
    <div class="col-4 mt-3">
      <div class="my-3">
        <div class="card rem-rad">
          <img class="card-img-top" src={logo} alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.description}</p>
          </div>
          
          <div class="card-body">
           
            <div class="row">
              <div class="col-4">
                <p class="card-text"><small class="text-muted">Credits:{props.credits}</small></p>
              </div>
              <div class="col-4">
                <p class="card-text"><small class="text-muted">Year:{props.year}</small></p>
              </div>
              {/* <div class="col-3">
                <p class="card-text"><small class="text-muted">Sem:{props.semester}</small></p>
              </div> */}
              <div class="col-4">
                <p class="card-text"><small class="text-muted">Slot:{props.slot_id}</small></p>
              </div>
              
            </div>
             </div>
          <button type="button" class="btn btn-outline-dark" onClick={handleClick}>Read More</button>
        </div>
      </div>
    </div>
  );
}