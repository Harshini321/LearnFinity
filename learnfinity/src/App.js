import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Landingpage from "./pages/landingpage/landingpage"
import Readmore from "./pages/landingpage/readmore"
import Dashboard from "./pages/home/home"

import AllCourses from "./pages/allcourses/allcourses"
import AllCourses_Insti from './pages/allcourses/allcourses_inst';
import AllCourses_year from './pages/allcourses/allcourses_year';
import AllCourses_inst_year from './pages/allcourses/allcourses_inst_year';
import Coming from './pages/coming/coming';
import Posts from "./pages/posts/posts";
import New_post from './pages/posts/new_post';
import PostsDet from "./pages/posts/postsdet"
import Course from "./pages/course/course"
import Course_id from './pages/course/course_id';
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
import Create_Ann from './pages/admin/create_announcement';
import Assignment_add from './pages/admin/assignment_add';
import Dashboard_a from './pages/admin/dashboard_a';
import Ass_grading from './pages/admin/ass_grading';
import Course_tot from './pages/admin/course_tot';
import Cut from './pages/admin/cut';
import Minor from './pages/admin/minor';
import Enrolled from './pages/admin/enrolled';
import Major from './pages/admin/major';
import Notes_add from './pages/admin/notes_add';
import Trial from "./pages/trial/trial"
import New_assignment from './pages/admin/create_assignment';
import Eval_submission from './components/eval_submission';
import New_note from './pages/admin/create_note';
function App() {
  return (
    <div>
      {/* <Landingpage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>}/> 
          <Route path="/readmore" element={<Readmore/>}/> 
          <Route path="/dashboard" element={<Dashboard/>}/> 
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/coming" element={<Coming/>}/>
          <Route path="/courses" element={<AllCourses/>}/> 
          <Route path="/courses/all" element={<AllCourses_Insti/>}/> 
          <Route path="/courses/:year" element={<AllCourses_year/>}/> 
          <Route path="/courses/:year/:semester" element={<AllCourses_inst_year/>}/> 
          <Route path="/courses/:year/:semester/:slot_id" element={<AllCourses_inst_year/>}/>

          <Route path="/course/:course_id" element={<Course_id/>}/>
          <Route path="/course" element={<Course/>}/> 
           
          <Route path="/pastcourses" element={<AllCourses/>}/> 
          <Route path="/posts/:course_id" element={<Posts/>}/>
          <Route path="/posts/:course_id/new" element={<New_post/>}/>
          <Route path="/postdet/:post_id" element={<PostsDet/>}/>

          <Route path="/announcement" element={<Announcements/>}/> 
          <Route path="/announcement/unread" element={<Announcements_Unread/>}/> 
          <Route path="/announcement/:course_id" element={<Announcements_course/>}/>

          <Route path="/grades" element={<Grades/>}/>
          <Route path="/grades/:course_id" element={<Grades_courses/>}/>
          <Route path="/notes/:course_id" element={<Notes/>}/>

          <Route path="/evaluation" element={<Assignment/>}/>
          <Route path="/eval_submission" element={<Eval_submission/>}/>
          <Route path="/evaluation/:course_id" element={<Assignment_course/>}/>
          <Route path="/trial" element={<Trial/>}/>

          <Route path="/admin" element={<Landingpage_a/>}/>
          <Route path="/dashboard/:course_id" element={<Dashboard_a/>}/>
          <Route path="/admin/course_tot" element={<Course_tot/>}/>
          <Route path="/admin/minor" element={<Minor/>}/>
          <Route path="/admin/cut" element={<Cut/>}/>
          <Route path="/admin/major" element={<Major/>}/>
          <Route path="/admin/enrolled" element={<Enrolled/>}/>
          <Route path="/admin/assignment/" element={<Assignment_add/>}/>
          <Route path="/admin/announcement" element={<Announcement_add/>}/>
          <Route path="/announcement/:course_id/new" element={<Create_Ann/>}/>
          <Route path="/notes/:course_id/new" element={<New_note/>}/>
          <Route path="/assignment/:course_id/new" element={<New_assignment/>}/>
         
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;