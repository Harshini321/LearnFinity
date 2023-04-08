
import React , { useState, useEffect } from 'react';
import './coursecard.css';
import logo from '../../images/course.png';
export default function coursecard(props) {
  return (
    <div className="px-2">
      <div className="card rem-rad">
          <img className="card-img-top" src={logo} alt="Card image cap"></img>
          <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
          </div>
          
          <div className="card-body">
              <a href="#" className="card-link no_underline">credits:{props.credits}</a>
              <a href="#" className="card-link no_underline">year:{props.year}</a>
          </div>
      </div>   
    </div>  
  );
}