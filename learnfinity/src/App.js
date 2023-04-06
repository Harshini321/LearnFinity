import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Landingpage from "./pages/landingpage/landingpage"
import Dashboard from "./pages/home/home"

import AllCourses from "./pages/allcourses/allcourses"
import AllCourses_Insti from './pages/allcourses/allcourses_inst';
import AllCourses_year from './pages/allcourses/allcourses_year';
import AllCourses_inst_year from './pages/allcourses/allcourses_inst_year';

import Posts from "./pages/posts/posts"
import Course from "./pages/course/course"
import Grades from "./pages/grades/grades"
import Grades_courses from './pages/grades/grades_course';
import Notes from "./pages/notes/notes"

import Assignment from "./pages/assignments/assignment"
import Assignment_course from './pages/assignments/assignment_course';

import Announcements from './pages/announcements/announcements';
import Announcements_Unread from './pages/announcements/announcement_unread';
import Announcements_course from './pages/announcements/announcement_course';

import Trial from "./pages/trial/trial"
function App() {
  return (
    <div>
      {/* <Landingpage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>}/> 
          <Route path="/dashboard" element={<Dashboard/>}/> 

          <Route path="/courses" element={<AllCourses/>}/> 
          <Route path="/courses/all" element={<AllCourses_Insti/>}/> 
          <Route path="/courses/:year" element={<AllCourses_year/>}/> 
          <Route path="/courses/:year/:semester" element={<AllCourses_inst_year/>}/> 
          <Route path="/courses/:year/:semester/:slot_id" element={<AllCourses_inst_year/>}/>

          <Route path="/course" element={<Course/>}/> 
          <Route path="/pastcourses" element={<AllCourses/>}/> 
          <Route path="/posts" element={<Posts/>}/>

          <Route path="/announcement" element={<Announcements/>}/> 
          <Route path="/announcement/unread" element={<Announcements_Unread/>}/> 
          <Route path="/announcement/:course_id" element={<Announcements_course/>}/>

          <Route path="/grades" element={<Grades/>}/>
          <Route path="/grades/:course_id" element={<Grades_courses/>}/>
          <Route path="/notes" element={<Notes/>}/>

          <Route path="/evaluation" element={<Assignment/>}/>
          <Route path="/evaluation/:course_id" element={<Assignment_course/>}/>
          <Route path="/trial" element={<Trial/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;