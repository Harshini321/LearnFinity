import React from 'react'
import Nav from "../../components/navbar/admin_nav"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import Minor_card from './admin_components/minor_card';

export default function Course_tot() {
  return (
    <div className='container-fluid dashboard row min-vh-100'>
      <Nav></Nav>
      <div class="col-10 dash">
        <div class="row">
          <div class="col-11 pb-3 pt-1"><h2>Course Total</h2></div>
          <Profile_comp></Profile_comp>
        </div>
        <div class="row">

          <div class="col-12">
            <div class="card mt-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-10">
                    <h5>COP 290</h5>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-3">
            <div class="card" >
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Entry No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Marks</th>
                      <th scope="col">Remarks</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <Minor_card></Minor_card>
                    <Minor_card></Minor_card>
                    <Minor_card></Minor_card>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary loginbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Save All
        </button>
      </div>
      <Footer></Footer>

    </div>
  )
}
