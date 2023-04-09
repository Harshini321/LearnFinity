import React , { useState, useEffect } from 'react';
import './coursecard.css';
import logo from '../../images/course.png';
export default function coursecard(props) {
  function handleClick(){
    props.onDetail(props.id)
  }
  return (
    <div class="px-2">
      <div class="card rem-rad">
          <img class="card-img-top" src={logo} alt="Card image cap"></img>
          <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">{props.description}</p>
          </div>
          
          <div class="card-body">
              <a href="#" class="card-link no_underline">credits:{props.credits}</a>
              <a href="#" class="card-link no_underline">year:{props.year}</a>
          </div>
          <button type="button" class="btn btn-outline-dark" onClick={handleClick}>Read More</button>
      </div>   
    </div>  
  );
}