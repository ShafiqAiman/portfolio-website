import React from 'react'
import {Link} from 'react-router-dom';

import RoomahLogo from "../assets/RoomahLogo.png"
import WearMeLogo from "../assets/WearMeLogo.png"
import ShopSimpleLogo from "../assets/ShopSimpleLogo.jpeg"
import UnimySpaceLogo from "../assets/UNIMY-SPACELogo.png"

const Projects = () => {

    function projectdetails(){
        alert("There is no details yet. Sorry!");
    }


    return (
        <div id="projects" className="projects container">
            <h1 className="titles">Projects</h1>
            <div className="projectslist">

                <Link to={"#"}>
                    <div className="project animate__animated animate__bounce">
                        <h3>Roomah</h3>
                        <img className="projectthumbnail" src={RoomahLogo}/><br /><br />
                        <h4 className='font-weight-bold'>Programming Languages</h4>
                        <label>HTML, CSS, Javascript, Vue.js, Python, Django</label>
                        <h4 className='font-weight-bold'>Database</h4>
                        <label>PostgreSQL</label>
                    </div>

                </Link>
                

                <div className="project animate__animated animate__bounce">
                    <h3>WearMe</h3>
                    <img className="projectthumbnail" src={WearMeLogo}/><br /><br />
                    <h4 className='font-weight-bold'>Programming Languages</h4>
                    <label>C#, Unity, Vuforia</label><br /><br />
                    <h4 className='font-weight-bold'>Database</h4>
                    <label>Vuforia Database</label>
                    
                </div>

                <div className="project animate__animated animate__bounce">
                    <h3>ShopSimple</h3>
                    <img className="projectthumbnail" src={ShopSimpleLogo}/><br /><br />
                    <h4 className='font-weight-bold'>Programming Languages</h4>
                    <label>Java, XML, Android Studio</label><br /><br />
                    <h4 className='font-weight-bold'>Database</h4>
                    <label>Firebase</label>
                </div>

            </div>
        </div>
        
    )
}

export default Projects
