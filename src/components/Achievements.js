import React from 'react'
import Indes from "../assets/INDES2018.jpeg"
import Cipta from "../assets/CIPTA2021.jpeg"
import Nals from "../assets/NALS2021.jpeg"


const Achievements = () => {
    return (
        <div id="achievements" className="Achievements">
            <h1 className="titles">Achievements</h1><br /><br />
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="achievementpost">
                            <img src={Cipta} alt="First slide"/>
                            <br /><br /><br /><br /><br />
                            <div className="carousel-caption">
                                <h4 className="achievementdetails">First Runner Up of CIPTA</h4>
                                <p className="achievementdetails">2021</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="carousel-item">
                        <div className="achievementpost">
                            <img src={Indes} alt="First slide"/>
                            <br /><br /><br /><br /><br />
                            <div className="carousel-caption">
                                <h4 className="achievementdetails">First Runner Up of INDES</h4>
                                <p className="achievementdetails">2018</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="achievementpost">
                            <img src={Nals} alt="First slide"/>
                            <br /><br /><br /><br /><br />
                            <div className="carousel-caption">
                                <h4 className="achievementdetails">Top 20 Facilitators of NALSMY</h4>
                                <p className="achievementdetails">2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Achievements
