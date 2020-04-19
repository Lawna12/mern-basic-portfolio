import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


export default function Contact() {
    return(
        <div>
            <Container id="main-container" className="container">
                <Row>
                    <Col size="md-12">
                        <div className="main-section">

                            <h1>Contact Me</h1>
                
        
                            <form action="MAILTO:lawna12@gmail.com" method="POST" enctype="multipar/form-data" />                                                     
                                <label for="Full-Name">Name</label> <br />
                                <input type="text" id="Full-Name" name="fullname" required placeholder="Your name.." />
                                <br />
                                <br />
                    
                                <label for="Email">Email</label><br />
                                <input type="email" id="Email" name="email" required placeholder="example@gmail.com" />
                                <br />
                                <br />
                    
                                <label for="Message">Message</label> <br />
                                <textarea id="Message" name="message" required rows="20" cols="20"></textarea>
                                <br />
                                <br />
                    
                                <input type="submit" value="Submit" />
                    
                    
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
    );
}