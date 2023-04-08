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

import Register from './pages/auth/register';
import Login from './pages/auth/login';

import Landingpage_a from './pages/admin/landingpage_a';
import Announcement_add from './pages/admin/announcement_add';
import Assignment_add from './pages/admin/assignment_add';
import Dashboard_a from './pages/admin/dashboard_a';
import Ass_grading from './pages/admin/ass_grading';
import Course_tot from './pages/admin/course_tot';
import Cut from './pages/admin/cut';
import Minor from './pages/admin/minor';
import Enrolled from './pages/admin/enrolled';
import Major from './pages/admin/major';
import Trial from "./pages/trial/trial"
function App() {
  return (
    <div>
      {/* <Landingpage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>}/> 
          <Route path="/dashboard" element={<Dashboard/>}/> 
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>

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

          <Route path="/admin" element={<Landingpage_a/>}/>
          <Route path="/admin/dashboard" element={<Dashboard_a/>}/>
          <Route path="/admin/course_tot" element={<Course_tot/>}/>
          <Route path="/admin/minor" element={<Minor/>}/>
          <Route path="/admin/cut" element={<Cut/>}/>
          <Route path="/admin/major" element={<Major/>}/>
          <Route path="/admin/enrolled" element={<Enrolled/>}/>
          <Route path="/admin/assignment/add" element={<Assignment_add/>}/>
          <Route path="/admin/assignment/grade" element={<Ass_grading/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;