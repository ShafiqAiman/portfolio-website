
import './App.css';
import Particles from "react-particles-js"
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'


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
    <Projects />
    
    </>
  );
}

export default App;
