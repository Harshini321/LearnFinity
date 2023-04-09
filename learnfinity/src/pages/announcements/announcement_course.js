import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import './announcements.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import ann from "../../images/ann.png"
import Profile_comp from '../../components/profile';
import Announcement from '../../components/announcement_card';
import { ReactSession } from 'react-client-session';
import axios from 'axios'
export default function Announcements_course() {
    const parms=useParams()
    const course_id=parms.course_id
    const [announcementList, setAnnouncementList] = useState([]);
    ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('access_token');
    const [coursedetail, setCourseDetails] = useState({})

    useEffect(() =>
    {
        axios.get(`http://10.17.6.4/announcement/${course_id}`, {headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 

        }}, {withCredentials: true })
        .then(res => {
            console.log(res.data.announcement_list)
            console.log("courselist")
            setAnnouncementList(res.data.announcement_list)
        })
    }, [])
    useEffect(() =>
    {
        axios.get(`http://10.17.6.4/courses/id/${course_id}`,{headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 

        }}, {withCredentials: true })
        .then(res => {
            console.log(res.data)
            setCourseDetails(res.data)
        })
    }, [])

  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">     
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>{coursedetail.name} Announcements</h2></div>
                <Profile_comp></Profile_comp>
            </div>
            
            {announcementList.map(an=>{
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