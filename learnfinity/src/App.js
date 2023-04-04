// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Landingpage from "./pages/landingpage/landingpage"
import Dashboard from "./pages/home/home"
import AllCourses from "./pages/allcourses/allcourses"
import Posts from "./pages/posts/posts"
import Course from "./pages/course/course"
import Grades from "./pages/grades/grades"
import Notes from "./pages/notes/notes"
import Assignment from "./pages/assignments/assignment"
import Announcements from './pages/announcements/announcements';
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
          <Route path="/course" element={<Course/>}/> 
          <Route path="/pastcourses" element={<AllCourses/>}/> 
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/announcements" element={<Announcements/>}/> 
          <Route path="/grades" element={<Grades/>}/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/assignments" element={<Assignment/>}/>
          <Route path="/trial" element={<Trial/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;