import React from 'react'
import {Link} from 'react-router-dom';

import RoomahLogo from "../assets/RoomahLogo.png"
import WearMeLogo from "../assets/WearMeLogo.png"
import ShopSimpleLogo from "../assets/ShopSimpleLogo.jpeg"
import UnimySpaceLogo from "../assets/UNIMY-SPACELogo.png"

const Projects = () => {

    function projectdetails(event, url){
        console.log("Test")
        window.open(url)
    }


    return (
        <div id="projects" className="projects">
            <h1 className="titles">Projects</h1>
            <div className="projectslist">

                {/* <button className="project-link">
                    <div className="project animate__animated animate__bounce">
                        
                        <div>
                            <h3>Roomah</h3>
                            <img className="projectthumbnail" src={RoomahLogo}/><br /><br />
                            <h4 className='font-weight-bold'>Programming Languages</h4>
                            <label>HTML, CSS, Javascript, Vue.js, Python, Django</label>
                            <h4 className='font-weight-bold'>Database</h4>
                            <label>PostgreSQL</label>
                        </div>
                        
                    </div>
                </button> */}
                
                
                <button className="project-link" onClick={event => projectdetails(event, 'https://github.com/ShafiqAiman/WearMe')}>
                    <div className="project animate__animated animate__bounce">
                        
                        <div>
                            <h3>WearMe</h3>
                            <img className="projectthumbnail" src={WearMeLogo}/><br /><br />
                            <h4 className='font-weight-bold'>Programming Languages</h4>
                            <label>C#, Unity, Vuforia</label><br /><br />
                            <h4 className='font-weight-bold'>Database</h4>
                            <label>Vuforia Database</label>
                        </div>
                    </div>
                </button>
                <button className="project-link" onClick={event => projectdetails(event, 'https://github.com/ShafiqAiman/ShopSimple')}>
                    <div className="project animate__animated animate__bounce">
                        
                        <div>
                            <h3>ShopSimple</h3>
                            <img className="projectthumbnail" src={ShopSimpleLogo}/><br /><br />
                            <h4 className='font-weight-bold'>Programming Languages</h4>
                            <label>Java, XML, Android Studio</label><br /><br />
                            <h4 className='font-weight-bold'>Database</h4>
                            <label>Firebase</label>
                        </div>
                    </div>
                </button>

            </div>
        </div>
        
    )
}

export default Projects
