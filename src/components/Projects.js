import React from 'react'
import RoomahLogo from "../assets/RoomahLogo.png"
import WearMeLogo from "../assets/WearMeLogo.png"
import ShopSimpleLogo from "../assets/ShopSimpleLogo.jpeg"
import UnimySpaceLogo from "../assets/UNIMY-SPACELogo.png"

const Projects = () => {

    function projectdetails(){
        alert("There is no details yet. Sorry!");
    }


    return (
        <div id="projects" className="projects">
            <h1 className="titles">Projects</h1>
            <div className="projectslist">

                
                <div className="project">
                    <h3>Roomah</h3>
                    <img className="projectthumbnail" src={RoomahLogo}/><br /><br />
                    <button onClick={projectdetails} className="projectdetailsbtn">View Details</button>
                </div>

                <div className="project">
                    <h3>WearMe</h3>
                    <img className="projectthumbnail" src={WearMeLogo}/><br /><br />
                    <a href="https://github.com/ShafiqAiman/WearMe">
                        <button className="projectdetailsbtn">View Details</button>
                    </a>
                    
                </div>

                <div className="project">
                    <h3>ShopSimple</h3>
                    <img className="projectthumbnail" src={ShopSimpleLogo}/><br /><br />
                    <a href="https://github.com/ShafiqAiman/ShopSimple">
                        <button className="projectdetailsbtn">View Details</button>
                    </a>
                </div>

                <div className="project">
                    <h3>UNIMY-SPACE</h3>
                    <img className="projectthumbnail" src={UnimySpaceLogo}/><br /><br />
                    <a href="https://github.com/ShafiqAiman/UNIMY-SPACE">
                        <button className="projectdetailsbtn">View Details</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
