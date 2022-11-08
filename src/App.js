import './App.css';
import Contact from './components/Contact';
import Content from './components/Content';
import Footer from './components/Footer';
import LiveWave from './components/LiveWave';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App overflow-x-hidden">
      {/* <Navbar/> */}
      {/* <Nav/> */}
      {/* <LiveWave/> */}
      <Roadmap/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
