import React from 'react'
import PetronasLogo from "../assets/PetronasLogo.png"
import HNLogo from '../assets/HNLogo.jpg'
import NandosLogo from '../assets/NandosLogo.png'
import FujitsuLogo from '../assets/FujitsuLogo.png'

const WorkingExperience = () => {
    return (
        <div id="workingexperience" className="WorkingExperience">
            <h1 className="titles">Working Experience</h1>
            <ul className="timeline">

                <li>
                    <div className="direction-l">
                    <div className="flag-wrapper">
                        <span className="hexa"></span>
                        <img className="companylogo" src={FujitsuLogo}/><br /><br />
                        <span className="flag">
                            Fujitsu</span>
                        <span className="time-wrapper"><span className="time">September 2021 - Present</span></span>
                    </div>
                        <div className="desc"><span className="position">Systems Engineer</span><br />
                        I am responsible to do programming and designing software applications. I also need to prepare user requirements, 
                        technical specifcations, and test documents. Next, I need to do perform Functional Testing, System Testing, and deployment of product within
                        a scheduled timeframe. I also need to diagnose issues, and perform bug fixes or software configuration-related issues. Lastly, I have to ensure 
                        high quality, architectural integrity, and secure implementation, and post implementation support activities.
                        </div>
                    </div>
                </li>
  
                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="hexa"></span>
                            <img className="companylogo" src={PetronasLogo}/><br /><br />
                            <span className="flag">
                                
                                PETRONAS</span>
                            <span className="time-wrapper"><span className="time">Feb 2021 - Aug 2021</span></span>
                        </div>
                        <div className="desc"><span className="position">Project & Delivery Intern</span><br />
                        I am responsible to manage and organize User Acceptance Testing (UAT) for IT projects' users.
                        I also support Project Management team in following up and assisting users to resolve issues regarding the projects.
                        Lastly, I conduct Internal Testing for the developed systems.
                        </div>
                    </div>
                </li>

                
                <li>
                    <div className="direction-l">
                    <div className="flag-wrapper">
                        <span className="hexa"></span>
                        <img className="companylogo" src={HNLogo}/><br /><br />
                        <span className="flag">
                            
                            Harvey Norman</span>
                        <span className="time-wrapper"><span className="time">Nov 2017 - Mac 2018</span></span>
                    </div>
                    <div className="desc"><span className="position">Sales Executive</span><br />
                    I was responsible to build business by identifying and selling prospects, maintaining relationships with clients.
                    I also prepared reports by collecting, analyzing and summarizing information.
                    Last but not least, I contributed to team effort by accomplishing related results as needed.
                    </div>
                    </div>
                </li>

                
                <li>
                    <div className="direction-r">
                    <div className="flag-wrapper">
                        <span className="hexa"></span>
                        <img className="companylogo" src={NandosLogo}/><br /><br />
                        <span className="flag">
                            
                            Nandos</span>
                        <span className="time-wrapper"><span className="time">Mac 2016 - May 2016</span></span>
                    </div>
                    <div className="desc"><span className="position">Service Crew</span><br />
                    I was resposible to take orders from customers and input their selections into the restaurant's computer system.
                    I also followed all restaurant safety and security procedures.
                    Lastly, I also responded to guest questions, concerns, and complaints and made sure they leave satisfied.
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WorkingExperience
