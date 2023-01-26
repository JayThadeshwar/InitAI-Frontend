import "./App.css";
import Blogpage from "./components/Blogs/Blogpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";
<<<<<<< HEAD
import Team from "./components/Team/Teampage";
=======
import SingleBlog from "./components/Blogs/SingleBlog";
import ProjectsPage from "./components/Projects/ProjectsPage";
>>>>>>> 43c5ebc45199fa6044042cd65af6840d97bccca6

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="App overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events/blogs" element={<Blogpage />} />
          <Route path="/ourteam" element={<Team />}></Route>
        </Routes>
      </div>
=======
    <div className="App overflow-x-hidden">
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/events/blogs/all" element={ <Blogpage /> } />
        <Route path="/projects" element={ <ProjectsPage /> } />
        <Route path={`/events/blogs/:id`} element={ <SingleBlog /> } />
    </Routes>
    </div>
>>>>>>> 43c5ebc45199fa6044042cd65af6840d97bccca6
    </>

  );
}

export default App;
