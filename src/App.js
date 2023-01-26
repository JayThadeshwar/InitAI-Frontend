import "./App.css";
import Blogpage from "./components/Blogs/Blogpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";
import Team from "./components/Team/Teampage";
import SingleBlog from "./components/Blogs/SingleBlog";
import ProjectsPage from "./components/Projects/ProjectsPage";

function App() {
  return (
    <>

      <div className="App overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events/blogs/all" element={<Blogpage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path={`/events/blogs/:id`} element={<SingleBlog />} />
          <Route path="/ourteam" element={<Team />}></Route>
        </Routes>
      </div>
    </>

  );
}

export default App;
