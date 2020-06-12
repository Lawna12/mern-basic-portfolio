import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import HeatWave from "../images/HeatWaveKY.png"
import MyGarage from "../images/MyGarage.png"
import PassGen from "../images/passGen.jpg"
import BurgerApp from "../images/burgers.png"
import DayPlanner from "../images/dayPlanner2pm.jpg"
import GitHub from "../images/github.jfif"
import LinkedIn from "../images/linkedinImg.jfif"
import GoudaBank from "../images/goudaBank.jpg"
import EmpDirectory from "../images/employee-directory.jpg"




export default function Portfolio() {
    return(
        <div>
            <Container id="main-container" className="container">
                <Row>
                    <Col size="md-12">
                        <div className="main-section">
                            <h1>Portfolio</h1>
                            <Row>
                                <div class="col-md-4">
                                    <a href="https://github.com/Lawna12/Heat-Wave-Crime-Data" class="work" id="workImg">
                                    <img src={HeatWave} className="auth-image" alt="HeatWave" />
                                    <h3>P1. Heat Wave</h3>
                                    </a>
                                </div>

                                <div class="col-md-4">    
                                    <a href="https://serene-scrubland-32480.herokuapp.com/members.html" class="work" id="workImg">
                                    <img src={GoudaBank} className="auth-image" alt="GoudaBank" />
                                    <h3>P2. GoudaBank</h3>
                                    </a>
                                </div>

                                <div class="col-md-4">
                                    <a href='https://lit-scrubland-58683.herokuapp.com/mygarage-kaera' class="work" id="workImg">
                                    <img src={MyGarage} className="auth-image" alt="DayPlanner" />
                                    <h3>P3. My Garage</h3>
                                    </a>
                                </div>
                            </Row>

                            <Row>
                                <div class="col-md-4">
                                    <a href="https://lawna12.github.io/passwordGenerator/" class="work" id="workImg">
                                    <img src={PassGen} className="auth-image" alt="PasswordGen" />
                                    <h3>Password Gen</h3>
                                    </a>
                                </div>

                                <div class="col-md-4">    
                                    <a href="https://immense-brushlands-09088.herokuapp.com/" class="work" id="workImg">
                                    <img src={BurgerApp} className="auth-image" alt="Burgers" />
                                    <h3>Burger app</h3>
                                    </a>
                                </div>

                                <div class="col-md-4">
                                    <a href="https://lawna12.github.io/dayPlanner/" class="work" id="workImg">
                                    <img src={DayPlanner} className="auth-image" alt="DayPlanner" />
                                    <h3>Day Planner</h3>
                                    </a>
                                </div>
                            </Row>
                            
                            <Row>
                                <div class="col-md-4">    
                                    <a href="https://github.com/Lawna12" class="work" id="workImg">
                                    <img src={GitHub} className="auth-image" alt="GitHub" />
                                    <h3>GitHub</h3>
                                    </a>
                                </div>

                                <div class="col-md-4">    
                                    <a href="https://lawna12-employee-directory1.herokuapp.com/" class="work" id="workImg">
                                    <img src={EmpDirectory} className="auth-image" alt="EmpDirectory" />
                                    <h3>Employee Dir</h3>
                                    </a>
                                </div>
                                
                                <div class="col-md-4">             
                                    <a href="https://www.linkedin.com/in/andrew-lawn-78a1013b/" class="work" id="workImg">
                                    <img src={LinkedIn} className="auth-image" alt="LinkedIn" />
                                    <h3>linkedin</h3>
                                    </a>
                                </div>  
                            </Row>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}