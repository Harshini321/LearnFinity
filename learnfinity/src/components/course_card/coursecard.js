
import React from 'react';
import './coursecard.css';
import logo from '../../images/course.png';
export default function coursecard() {
  return (
    <div class="card rem-rad">
        <img class="card-img-top" src={logo} alt="Card image cap"></img>
        <div class="card-body">
            <h5 class="card-title">COP 290</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        
        <div class="card-body">
            <a href="#" class="card-link no_underline">Assignments</a>
            <a href="#" class="card-link no_underline">Notes</a>
        </div>
    </div>     
  );
}