import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Headshot from "../images/headshot1.jpeg"


export default function Index() {
    return(
        <div>
            <Container id="main-container" className="container">
                <Row>
                    <Col size="md-12">
                        <div className="main-section">
                            <h1>About Me</h1>
                            <img src={Headshot} id="port-pic" alt="headshot" />
                            <p>
                Front-End Web Developer leveraging a background in Sales and Management to build a more intuitive user experience on the web.
            </p>
            <br/>
            <p>
                Recently earned a certificate in Full Stack Development from the University of Connecticut, with newly developed skills in HTML, CSS, JavaScript, React.js, and responsive web design.  
            </p>
            <br/>
            <p>
                An innovative problem-solver with strengths in organization, time-management, and collaboration. I recently applied aspects of these strengths in a project where I worked in a team of four to develop a multi-page MERN app that helps a consumer learn about their vehicles, order parts, and schedule an appointment with a mechanic.
            </p>
            <br/>
            <p>
                Excited to leverage skills in the future as part of a fast-paced, quality-driven team to create more meaningful web applications.
            </p> 
                            <br />
                            <br />
                            <p>Andrew Lawn</p>
                            <p>860-514-0587</p>
                            <p>lawna12@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
}