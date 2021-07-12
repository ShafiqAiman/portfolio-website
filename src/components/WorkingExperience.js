import React from 'react'
import PetronasLogo from "../assets/PetronasLogo.png"
import HNLogo from '../assets/HNLogo.jpg'
import NandosLogo from '../assets/NandosLogo.png'

const WorkingExperience = () => {
    return (
        <div id="workingexperience" className="WorkingExperience">
            <h1 className="titles">Working Experience</h1>
            <ul class="timeline">
  
            <li>
                <div class="direction-r">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <img className="companylogo" src={PetronasLogo}/><br /><br />
                    <span class="flag">
                        PETRONAS</span>
                    <span class="time-wrapper"><span class="time">Feb 2021 - Aug 2021</span></span>
                </div>
                <div class="desc"><span className="position">Project & Delivery Intern</span><br />
                I am responsible to manage and organize User Acceptance Testing (UAT) for IT projects' users.
                I also support Project Management team in following up and assisting users to resolve issues regarding the projects.
                Lastly, I conduct Internal Testing for the developed systems.
                </div>
                </div>
            </li>

            
            <li>
                <div class="direction-l">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <img className="companylogo" src={HNLogo}/><br /><br />
                    <span class="flag">Harvey Norman</span>
                    <span class="time-wrapper"><span class="time">Nov 2017 - Mac 2018</span></span>
                </div>
                <div class="desc"><span className="position">Sales Executive</span><br />
                I was responsible to build business by identifying and selling prospects, maintaining relationships with clients.
                I also prepared reports by collecting, analyzing and summarizing information.
                Last but not least, I contributed to team effort by accomplishing related results as needed.
                </div>
                </div>
            </li>

            
            <li>
                <div class="direction-r">
                <div class="flag-wrapper">
                    <span class="hexa"></span>
                    <img className="companylogo" src={NandosLogo}/><br /><br />
                    <span class="flag">Nandos</span>
                    <span class="time-wrapper"><span class="time">Mac 2016 - May 2016</span></span>
                </div>
                <div class="desc"><span className="position">Service Crew</span><br />
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
