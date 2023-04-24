import React, { useState, useEffect }  from 'react';
import './announcements.css';
import Nav from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import ann from "../../images/ann.png"
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import Profile_comp from '../../components/profile';
import Announcement from '../../components/announcement_card';
export default function Announcements() {
    // const [ans,setAns]=useState([])
    // useEffect(()=>{
    //     fetch("/announcement",{
    //         'methods':'GET',
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(resp => setAns(resp))
    //     .catch(error => console.log(error))
    // },[])
    const [announcementList, setAnnouncementList] = useState([]);
    ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('access_token');
    useEffect(() =>
    {
        axios.get('http://10.17.6.4/announcement', {headers: { Authorization: `Bearer ${token}` }},{withCredentials: true })
        .then(res => {
            console.log(res.data.announcement_list)
            console.log("courselist")
            setAnnouncementList(res.data.announcement_list)
        })
    }, [])

  return (
    <div className='container-fluid dashboard row  min-vh-100'>      
        <Nav></Nav>
        <div class="col-10 dash">     
        <div class="row">
                <div class="col-11 pb-3 pt-1"><h2>Announcements</h2></div>
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