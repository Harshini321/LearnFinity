import React, { useState, useEffect }  from 'react';
import './announcements.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import ann from "../../images/ann.png"
import Profile_comp from '../../components/profile';
import Announcement from '../../components/announcement_card';
export default function Announcements_Unread() {
    const [ans,setAns]=useState([])
    useEffect(()=>{
        fetch("/announcement/unread",{
            'methods':'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => setAns(resp))
        .catch(error => console.log(error))
    },[])

  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">     
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>Unread Announcements</h2></div>
                <Profile_comp></Profile_comp>
            </div>
            <div class="card my-3">
                <div class="card-body">
                    <div class="row px-3">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-3 icon-block">
                                    <img src={ann} alt='CAIC' width='40' height='40' />
                                </div>
                                <div class="col-9">
                                    New Assignment<br></br>
                                    COP 290
                                </div>
                            </div>

                        </div>
                        <div class="col-9">

                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col-12">
                        <p className='py-2 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>

                </div>
            </div>
            {ans.map(an=>{
                return(
                    <Announcement 
                        id={an.id}
                        staticfile_id={an.staticfile_id}
                        author_id={an.author_id}
                        title={an.title}
                        course_id={an.course_id}
                        createdAt={an.createdAt}
                        body={an.body}
                    ></Announcement>
                )
            })}
            <Footer></Footer>

        </div>
    </div>
    
  );
}