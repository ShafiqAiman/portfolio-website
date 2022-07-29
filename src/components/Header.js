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
                    <p>I am an ambitious Software Engineer with <mark>one year of working experience</mark> and now <mark>looking for an opportunity</mark> in IT / software 
                        development to enhance my skills and be a valuable asset to company.   I am very passionate about technologies and how they can impact our world 
                        nowadays and in the future. Currently, I have experience in developing projects with <mark>Python, Java, C#, Node.js, HTML, CSS, Javascript, React.js,
                        Vue.js, PostgreSQL, MySQL and many more.</mark> I also have good knowledge in programming concepts that can enhance software development like <mark>Machine
                        Learning, Object-Oriented Programming, Data Structure and many more.</mark>

                        
                    </p>
                    <p>Besides, I have a strong background in leading people democratically with creative strategies. I am currently the CEO of 
                        Bed & Buddies, a startup that was awarded by iCUBE International as <mark>First Runner-Up of CIPTA 2021</mark>that I co-founded with some 
                        of my friends. I was also the Team Leader in several projects that participated in International IT competitions like 
                        Dell Hack2Hire 2021, and the International Innovation, Invention & Design (INDES) 2018. Next, I was appointed as <mark>President of 
                        Student Committee 2020, President and Vice President (Student Activities & Events) of UNIMY Student Representative Council 
                        2018/2019</mark>. I was also given the trust to be the Program Director in several events that involve UNIMY students, academicians, 
                        and staff.</p>
                </div>
        
        </div>
        
    )
}

export default Header
