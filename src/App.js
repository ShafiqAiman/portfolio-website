
import './App.css';
import Particles from "react-particles-js"
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkingExperience from './components/WorkingExperience'
import Achievements from './components/Achievements'


function App() {
  return (
    <>
    
    <Navbar />
    <Particles 
      params={{
        particles:{
          number:{
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }}
    />
    <Header />
    <AboutMe />
    <Skills />
    <Projects />
    <WorkingExperience />
    <Achievements />
    </>
  );
}

export default App;
