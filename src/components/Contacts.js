import React from 'react'
import linkedin from '../assets/LinkedinLogo.png'
import email from '../assets/EmailLogo.png'

const Contacts = () => {
    return (
        <div id="contacts" className="container contacts">
            <h1 className="titles">Contacts</h1>
            <div className="emailform">
                <form action="https://formsubmit.co/c5d8f208d7f878acddf1be39d99581e3" method="POST">
                    <div class="form-group  animate__animated animate__jackInTheBox">
                        <label>Your Email</label><br />
                        <input type="email" className="form-control" name="email" required></input>
                    </div>

                    <div class="form-group  animate__animated animate__jackInTheBox">
                        <label>Your Message</label><br />
                        <textarea type="text" className="form-control" name="name" required></textarea>
                    </div>

                    <button type="submit" className="contactbtn">
                        <span className="SubmitText">Send</span>
                    </button>
                </form>    
            </div>
            <div className="contactoptions">
                <h3>You can also contact me here!</h3>
                <a href="https://www.linkedin.com/in/shafiq-aimann/">
                    <img className="contactlogo" src={linkedin}></img>
                </a>

                <a href="mailto:shafiqaimansn@gmail.com">
                    <img className="contactlogo" src={email}></img>
                </a>

            </div>

            
        </div>
    )
}

export default Contacts
