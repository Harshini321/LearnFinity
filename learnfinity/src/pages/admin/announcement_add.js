
import React from 'react';
import Nav from "../../components/navbar/admin_nav"
import Footer from "../../components/footer/footer"
import Profile_comp from '../../components/profile';
import add_icon from "../../images/add_icon.png"
import edit_icon from "../../images/edit_icon.png"
import grade_icon from "../../images/grade_icon.png"
import pdf from "../../images/pdf.png"
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
            
                
                
                    
                
                
            
            <div class="card">
                <div class="card-body">
                    <div class="row">
                       
                        <div >
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading"></input>
                                    
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Body"></input>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary ">Add</button>
                                </div>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <Announcement></Announcement>
            
        </div>
        
        <Footer></Footer>
    </div>
    
  );
}