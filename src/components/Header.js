import React from "react"
import Typed from 'react-typed'
import Picture from "../assets/ProfilePhoto.jpg"
import Particles from "react-particles-js"
import AboutMe from './AboutMe'

const Header = () => {
    return (
        <div className="mb-4">
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
                <div id="aboutme" className="AboutMe">
                    <h1 className="titles">About Me</h1><br />
                    <p>I am currently a <mark>third-year of Computer Science Degree student</mark> at UNIMY who hopes to secure a <mark>Software Engineer</mark> position 
                        by the end of this year. I am very passionate about technologies and how they can impact our world nowadays and in the 
                        future. At UNIMY, I have learned a lot of programming languages to be implemented in the development like <mark>Python, Java, C, 
                        C#, HMTL, CSS, JavaScript, MySQL, and many more</mark>. I also managed to learn programming skills that can enhance my programming 
                        like <mark>Artificial Intelligence, Machine Learning, Deep Learning, Object-Oriented Programming, Data Structure, and many more. </mark>
                        So far, I have involved in 2 Web Development and 2 Mobile App Development projects.
                    </p>
                    <p>I am also very passionate to lead people democratically with creative strategies. I am currently the Team Leader of 
                        Roomah, a startup that was awarded by iCUBE International as <mark>First Runner-Up of CIPTA 2021</mark>that I co-founded with some 
                        of my friends. I was also the Team Leader in several projects that participated in International IT competitions like 
                        Dell Hack2Hire 2021, and the International Innovation, Invention & Design (INDES) 2018. Besides, I was the <mark>President of 
                        Student Committee 2020, President and Vice President (Student Activities & Events) of UNIMY Student Representative Council 
                        2018/2019</mark>. I was also given the trust to be the Program Director in several events that involve UNIMY students, academicians, 
                        and staff.</p>
                </div>
        
        </div>
        
    )
}

export default Header
