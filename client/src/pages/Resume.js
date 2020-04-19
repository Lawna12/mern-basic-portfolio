import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ResumePDF from "../images/resumeJan2020.pdf"



export default function Resume() {
    return(
        <div>
        <Container id="main-container" className="container">
            <Row>
                <Col size="md-12">
                    <div id="resume" className="main-section">
                    <embed src={ResumePDF} type="application/pdf"   height="700px" width="600" />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
        )
}