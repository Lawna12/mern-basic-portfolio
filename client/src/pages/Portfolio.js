import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import PassGen from "../images/passGen.jpg"
import BurgerApp from "../images/burgers.png"
import DayPlanner from "../images/dayPlanner2pm.jpg"
import NoteTaker from "../images/NoteTaker.jpg"
import GitHub from "../images/github.jfif"
import LinkedIn from "../images/linkedinImg.jfif"



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
                                    <div onclick="location.href='https://lawna12.github.io/passwordGenerator/'" class="work" id="workImg">
                                    <img src={PassGen} className="auth-image" alt="PasswordGen" />
                                    <h3>Password Gen</h3>
                                    </div>
                                </div>

                                <div class="col-md-4">    
                                    <div onclick="location.href='https://immense-brushlands-09088.herokuapp.com/'" class="work" id="workImg">
                                    <img src={BurgerApp} className="auth-image" alt="Burgers" />
                                    <h3>Burger app</h3>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div onclick="location.href='https://lawna12.github.io/dayPlanner/';" class="work" id="workImg">
                                    <img src={DayPlanner} className="auth-image" alt="DayPlanner" />
                                    <h3>Day Planner</h3>
                                    </div>
                                </div>
                            </Row>

                            <Row>
                                <div class="col-md-4">
                                    <div onclick="location.href='https://github.com/Lawna12/noteTaker/tree/master/Develop';" class="work" id="workImg">
                                    <img src={NoteTaker} className="auth-image" alt="NoteTaker" />
                                    <h3>Note Taker</h3>
                                    </div>
                                </div>

                                <div class="col-md-4">    
                                    <div onclick="location.href='https://github.com/Lawna12'" class="work" id="workImg">
                                    <img src={GitHub} className="auth-image" alt="GitHub" />
                                    <h3>GitHub</h3>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">             
                                    <div onclick="location.href='https://www.linkedin.com/in/andrew-lawn-78a1013b/'" class="work" id="workImg">
                                    <img src={LinkedIn} className="auth-image" alt="LinkedIn" />
                                    <h3>linkedin</h3>
                                    </div>
                                </div>  
                            </Row>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}