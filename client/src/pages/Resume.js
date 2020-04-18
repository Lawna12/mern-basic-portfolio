import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


export default function Resume() {
    return(
        <div id="resume">
            <Container id="main-container" className="container">
                <Row>
                    <Col size="md-12">
                    <embed src="../images/resumeJan2020.pdf" type="application/pdf"   height="700px" width="600" />
                    </Col>
                </Row>
            </Container>
        </div>
        )
}