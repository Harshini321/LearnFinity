
import React from 'react';
import Nav from "../../components/navbar/admin_nav"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';

import Announcement from '../../components/announcement_card';
export default function Announcement_add() {
    return (
        <div class='container-fluid dashboard row  min-vh-100'>
            <Nav></Nav>
            <div class="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-4 dash">
                <div class="row">
                    <div class="col-11 pb-3 pt-1"><h2>COP 290</h2></div>
                    <Profile_comp></Profile_comp>
                </div>




                <div class="col-4 ">
                    <a type="button" class="btn btn-primary loginbtn" href="/admin/announcement/add/">
                        Add New Announcement
                    </a>
                </div>

                {/* <Announcement></Announcement>
                <Announcement></Announcement>
                <Announcement></Announcement> */}

            </div>

            <Footer></Footer>
        </div>

    );
}