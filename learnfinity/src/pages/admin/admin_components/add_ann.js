import React from 'react'
import edit_icon from "../../../images/edit_icon.png"
function Add_ann() {
  return (
    <div class="row px-3">
      <div class="col-9">
        <p class='px-3'>New Announcement :COP290</p>

      </div>
      <div class="col-3">
        <a type="button" href='/admin/notes/{id}/edit' >
          <img src={edit_icon} alt='CAIC' width='20' height='20' />
        </a>
      </div>
    </div>
  )
}

export default Add_ann