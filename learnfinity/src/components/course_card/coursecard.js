import React , { useState, useEffect } from 'react';
import './coursecard.css';
import logo from '../../images/course.png';
export default function coursecard(props) {
  function handleClick(){
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
          {console.log(props.image)}
          <div class="card-body">
              <a href="#" class="card-link no_underline">Credits:{props.credits}</a>
              <a href="#" class="card-link no_underline">Year:{props.year}</a>
              <a href="#" class="card-link no_underline">Semester:{props.semester}</a>
              <a href="#" class="card-link no_underline">Slot:{props.slot_id}</a>

          </div>
          <button type="button" class="btn btn-outline-dark" onClick={handleClick}>Read More</button>
      </div>   
    </div>  
    </div>
  );
}