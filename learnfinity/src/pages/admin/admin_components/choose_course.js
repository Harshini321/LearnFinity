import React from 'react'

function Choose_course(props) {
  function handleClick() {
    props.onDetail(props.id)
  }
  return (
    <div class='col-3 co-card'>
      <div class="card px-3 py-3 co-rad">
        <div class="card-body">
          <h4 class="card-title text-center">{props.name}</h4>
          {/* <h6 class="card-subtitle mb-2 text-muted text-center">Computer Architecture</h6> */}
          <p class="card-text text-center">{props.description}</p>
          <h6 class="card-subtitle mb-2 text-muted text-center">Semester {props.semester}</h6>
          <div class='text-center mt-3'>
            <button type="button" class="btn btn-sm btn-outline-dark mt-1" onClick={handleClick} >View Course</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose_course