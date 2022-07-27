import React from 'react'

import Python from '../assets/python.png'
import Java from '../assets/java.png'
import CSharp from '../assets/csharp.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css3.png'
import Javascript from '../assets/javascript.png'
import PHP from '../assets/php.png'

import Reactjs from '../assets/react.png'
import Vuejs from '../assets/vuejs.png'
import Django from '../assets/djangoproject.png'
import ASP from '../assets/asp.png'
import Unity from '../assets/unity.png'
import Android from '../assets/android-studio.png'
import Vuforia from '../assets/vuforia.jpg'

import PostgreSQL from '../assets/postgresql.png'
import MySQL from '../assets/mysql.png'
import MSSQL from '../assets/sql.png'
import Firebase from '../assets/firebase.png'

import Git from '../assets/git.png'
import GitHub from '../assets/github.png'
import GitLab from '../assets/gitlab.png'

import AdobeXD from '../assets/adobe-xd.png'
import Blender from '../assets/blender.png'
import Canva from '../assets/canva.png'

const Skills = () => {
    return (
        <div id="skills" className="Skills container">
            <h1 className="titles">Skills</h1><br />
            <h3 className="skillsections">Programming Languages</h3>
            <div className='animate__animated animate__heartBeat animate__slower plsection p-4'>
                <div className="plgroup">
                    <img className="planguages" src={Python}/><br></br>
                    <label>Python</label>
                </div>

                <div className="plgroup">
                    <img className="planguages" src={Java}/><br></br>
                    <label>Java</label>
                </div>

                <div>
                    <img className="planguages" src={CSharp}/><br></br>
                    <label>C#</label>
                </div>

                <div>
                    <img className="planguages" src={HTML}/><br></br>
                    <label>HTML</label>
                </div>

                <div>
                    <img className="planguages" src={CSS}/><br></br>
                    <label>CSS</label>
                </div>

                <div>
                    <img className="planguages" src={Javascript}/><br></br>
                    <label>Javascript</label>
                </div>

                <div>
                    <img className="planguages" src={PHP}/><br></br>
                    <label>PHP</label>
                </div>

            </div><br /><br />
            <h3 className="skillsections">Frameworks</h3>
            <div className='animate__animated animate__heartBeat animate__slower plsection p-4'>

                <div>
                    <img className="planguages" src={Reactjs}/><br></br>
                    <label>React.js</label>
                </div>

                <div>
                    <img className="planguages" src={Vuejs}/><br></br>
                    <label>Vue.js</label>
                </div>

                <div>
                    <img className="planguages" src={Django}/><br></br>
                    <label>Django</label>
                </div>

                <div>
                    <img className="planguages" src={Unity}/><br></br>
                    <label>Unity</label>
                </div>

                <div>
                    <img className="planguages" src={ASP}/><br></br>
                    <label>ASP.NET</label>
                </div>

                <div>
                    <img className="planguages" src={Android}/><br></br>
                    <label>Android Studio</label>
                </div>

                <div>
                    <img className="planguages" src={Vuforia}/><br></br>
                    <label>Vuforia</label>
                </div>
                
            </div><br /><br />
            <h3 className="skillsections">Databases</h3>
            <div className='animate__animated animate__heartBeat animate__slower plsection p-4'>
                <div>
                    <img className="planguages" src={PostgreSQL}/><br></br>
                    <label>PostgreSQL</label>
                </div>

                <div>
                    <img className="planguages" src={MySQL}/><br></br>
                    <label>MySQL</label>
                </div>

                <div>
                    <img className="planguages" src={MSSQL}/><br></br>
                    <label>MSSQL</label>
                </div>

                <div>
                    <img className="planguages" src={Firebase}/><br></br>
                    <label>Firebase</label>
                </div>
                
            </div><br /><br />

            <h3 className="skillsections">Version Tools</h3>
            <div className='animate__animated animate__heartBeat animate__slower plsection p-4'>
                <div>
                    <img className="planguages" src={Git}/><br></br>
                    <label>Git</label>
                </div>

                <div>
                    <img className="planguages" src={GitHub}/><br></br>
                    <label>GitHub</label>
                </div>

                <div>
                    <img className="planguages" src={GitLab}/><br></br>
                    <label>GitLab</label>
                </div>
                
            </div><br /><br />

            <h3 className="skillsections">Others</h3>
            <div className='animate__animated animate__heartBeat animate__slower plsection p-4'>
                <div>
                    <img className="planguages" src={AdobeXD}/><br></br>
                    <label>Adobe XD</label>
                </div>

                <div>
                    <img className="planguages" src={Blender}/><br></br>
                    <label>Blender</label>
                </div>

                <div>
                    <img className="planguages" src={Canva}/><br></br>
                    <label>Canva</label>
                </div>

                
            </div><br /><br />

        </div>
    )
}

export default Skills
