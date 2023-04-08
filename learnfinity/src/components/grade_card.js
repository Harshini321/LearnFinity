import React , { useState, useEffect }from 'react';
export default function grade_card(props) {
  return (
    <div className="col-3 px-3 mb-3">
        <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title">{props.course_id}</h5>
                <h6 className="card-subtitle mb-2 mt-2 text-muted">{props.grade}</h6>
                <h6 className="card-subtitle mb-2 mt-2 text-muted">Avg : 60</h6>
                
            </div>
        </div>
    </div>
  );
}