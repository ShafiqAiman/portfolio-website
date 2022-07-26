import React from "react"
import Typed from 'react-typed'
import Picture from "../assets/ProfilePhoto.jpg"
import Particles from "react-particles-js"
import AboutMe from './AboutMe'

const Header = () => {
    return (
        <>
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
                <div className="header-wrapper">
            
                    <div className="main-info">
                        {/* <img className="ProfilePhoto" src={Picture}/> */}
                        <span className="intro">My name is Shafiq Aiman.</span><br />
                        <span className="intro">I am a </span>
                        <Typed 
                            className="typed-text"
                            strings = {["Software Developer.","Web Developer.","Mobile Developer"]}
                            // strings={["Web Development","Mobile Development", "Augmented Reality Development"]}
                            typeSpeed={100}
                            backSpeed={100}
                            loop
                        /><br /><br />
                        
                        
                    {/* <a href="#" className="btn-main-offer">Contact Me</a> */}
                    </div>
            
                </div>
                <AboutMe />
        
        </>
        
    )
}

export default Header
