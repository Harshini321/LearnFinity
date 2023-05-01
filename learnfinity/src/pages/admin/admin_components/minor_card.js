import React from 'react'
import add_icon from "../../../images/add_icon.png"
function Minor_card() {
  return (
    <tr >
      <th scope="row">1</th>
      <td >Mark</td>
      <td>Otto</td>
      <td> <div class="form-group col-md-6">

        <input type="email" class="form-control" id="inputEmail4" placeholder="Marks"></input>
      </div></td>
      <td> <div class="form-group col-md-6">

        <input type="email" class="form-control" id="inputEmail4" placeholder="Remarks"></input>
      </div></td>
      <td><a className='navbar-brand nav-logo' href='/'>
        <img src={add_icon} alt='CAIC' width='20' height='20' />
      </a></td>
    </tr>
  )
}

export default Minor_card