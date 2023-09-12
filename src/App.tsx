import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 Taylor Kadans Hello World
            </header>
            <h1>This is a header.</h1>
            <img
                src="https://www.hepper.com/wp-content/uploads/2021/11/havanese-2780122_1280-2-1024x682.jpg"
                alt="havanese"
            />
            List:
            <ul>
                <li>Taylor Kadans</li>
                <li>2025</li>
                <li>CS</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="Red-rectangle"></div>
                    </Col>
                    <Col>
                        <div className="Red-rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
