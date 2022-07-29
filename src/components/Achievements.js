import React from 'react'

import FIC from "../assets/FIC.png"
import VCAward from "../assets/VCAward.jpg"
import Indes from "../assets/INDES2018.jpg"
import Cipta from "../assets/CIPTA.png"
import Incex from "../assets/INCEX.png"

import Src19 from "../assets/SRC2019.jpg"
import Src20 from "../assets/SRC2020.jpg"
import CNY20 from "../assets/CNY20.jpg"
import Trailblazing from "../assets/Trailblazing.jpg"
import Deepavali from "../assets/Deepavali.jpg"
import Raya from "../assets/Raya.jpg"

const Achievements = () => {
    return (
        
        <div className='container Achievements'>
            <h1 className="titles">Achievements</h1><br /><br />
            <div className='mb-5'>
                <h3 className="font-weight-bold">Leadership</h3>
                <div id="carouselLeaderships" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselLeaderships" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselLeaderships" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselLeaderships" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselLeaderships" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselLeaderships" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselLeaderships" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Src20} class="d-block w-100 achievementphoto" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption">
                            <h5>President of UNIMY Student Committee</h5>
                            <p>2020</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={Src19} class="d-block w-100 achievementphoto" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption">
                            <h5>President of UNIMY Student Representative Council</h5>
                            <p>2018/2019</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                            <img src={CNY20} class="d-block w-100 achievementphoto" alt="..." />
                            <div class="carousel-caption d-none d-md-block caption">
                                <h5>Project Director of UNIMY Chinese New Year Celebration</h5>
                                <p>2020</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={Trailblazing} class="d-block w-100 achievementphoto" alt="..." />
                            <div class="carousel-caption d-none d-md-block caption">
                                <h5>Project Director of UNIMY Trailblazing 5.0</h5>
                                <p>2019</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={Raya} class="d-block w-100 achievementphoto" alt="..." />
                            <div class="carousel-caption d-none d-md-block caption">
                                <h5>Project Director of UNIMY Hari Raya Celebration</h5>
                                <p>2019</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={Deepavali} class="d-block w-100 achievementphoto" alt="..." />
                            <div class="carousel-caption d-none d-md-block caption">
                                <h5>Project Director of UNIMY Deepavali Celebration</h5>
                                <p>2019</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselLeaderships" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselLeaderships" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            
            <div className='mb-5'>
                <h3 className="font-weight-bold">Awards</h3>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={FIC} class="d-block w-100 achievementphoto" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption">
                            <h5>First Runner Up of Fujitsu Innovation Circuit Academy</h5>
                            <p>2022</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={VCAward} class="d-block w-100 achievementphoto" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption">
                            <h5>UNIMY Vice Chancellor's Award</h5>
                            <p>2021</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Cipta} class="d-block w-100 achievementphoto" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption">
                            <h5>First Runner Up of iCube International's CIPTA</h5>
                            <p>2021</p>
                        </div>
                    </div>
                        <div class="carousel-item">
                        <img src={Incex} class="d-block w-100 achievementphoto" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption">
                            <h5>Silver Award of InCEx</h5>
                            <p>2021</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={Indes} class="d-block w-100 achievementphoto" alt="..." />
                        <div class="carousel-caption d-none d-md-block caption">
                            <h5>First Runner Up of INDES</h5>
                            <p>2018</p>
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Achievements
