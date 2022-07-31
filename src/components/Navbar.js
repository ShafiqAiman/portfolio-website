import React from "react"
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
            <div className= "container">

                <Link to={"/"} className="navbar-brand"><span className="navbar-name">Shafiq Aiman</span></Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <Link to={"/skills"} className="nav-link">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/projects"} className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/workingexperience"} className="nav-link">Working Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/achievements"} className="nav-link">Achievements</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contacts"} className="nav-link">Contacts</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
