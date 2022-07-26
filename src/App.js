
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Particles from "react-particles-js"
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkingExperience from './components/WorkingExperience'
import Achievements from './components/Achievements'
import Contacts from './components/Contacts'
import Footer from './components/Footer'


function App() {
  return (
    // <>
    
    // <Navbar />
    // <Particles 
    //   params={{
    //     particles:{
    //       number:{
    //         value: 30,
    //         density: {
    //           enable: true,
    //           value_area: 900
    //         }
    //       }
    //     }
    //   }}
    // />
    // <Header />
    // <AboutMe />
    // <Skills />
    // <Projects />
    // <WorkingExperience />
    // <Achievements />
    // <Contacts />
    // <Footer />
    // </>
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/workingexperience" element={<WorkingExperience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
