import React , { useState, useEffect }from 'react';
export default function grade_card(props) {
  return (
    <div class="col-3 px-3 mb-3">
        <div class="card">
            <div class="card-body text-center">
                <h5 class="card-title">{props.course_id}</h5>
                <h6 class="card-subtitle mb-2 mt-2 text-muted">{props.grade}</h6>
                <h6 class="card-subtitle mb-2 mt-2 text-muted">Avg : 60</h6>
                
            </div>
        </div>
    </div>
  );
}