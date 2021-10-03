import React from "react"


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
            <div className= "container">

                <a className="navbar-brand" href="#"><span className="navbar-name">Shafiq Aiman</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutme">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#workingexperience">Working Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#achievements">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
