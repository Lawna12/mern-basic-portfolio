import React from "react";
// import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

export default function Index() {
    return(
        <div>
            <Container id="main-container" className="container">
                <Row>
                    <Col size="md-12">
                        <div className="main-section">
                            <h1>About Me</h1>
                            <img id="port-pic"  src="./assets/images/headshot1.jpeg" />
                            <p>A little bit about myself. It’s easiest to sum up my life in three areas. Family, Fun, and Future. I would like to start with the most important: </p>
                            <br />
                            <p>Family. I am the middle of five kids. My parents were military, both served in the Air Force. I am an uncle to 5 nephews, my older brother has 3 boys, and my youngest sister has 2 boys. </p>
                            <br />
                            <br />
                            <p>Fun! I have lots of hobbies. I am a huge car enthusiast. I am building a 1990 Mazda Rx-7. I also like to go metal detecting and have found lots of treasures (mostly bottlecaps). If there is a day above 50 degrees I like to spend some time outside. You can find me golfing, hiking, hanging at the beach, or just going for a cruise.</p>    
                            <br />
                            <p>Future. I am a dreamer, and always trying to better myself. Learning the art of Web Development will hopefully open doors to a better future, as well as give me a creative outlet to fulfill.   </p>    
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