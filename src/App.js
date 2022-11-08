import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import Landing1 from './components/Landing1';
import OurProjects from './components/OurProjects';
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Landing1/>
      <OurProjects />
      <Blogs />
      <Roadmap/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
