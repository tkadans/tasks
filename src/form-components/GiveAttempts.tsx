import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function remove() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function add() {
        if (!isNaN(requested) && requested > 0) {
            setAttempts(attempts + requested);
            setRequested(0);
            setErrorMessage(null);
        } else {
            setErrorMessage(
                "Please enter a valid positive number of attempts."
            );
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attempts}</p>
            <Form.Group>
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(e) => setRequested(parseInt(e.target.value))}
                />
            </Form.Group>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Button
                variant="primary"
                onClick={remove}
                disabled={attempts === 0}
            >
                Use Attempt
            </Button>
            <Button variant="success" onClick={add}>
                Gain Attempt
            </Button>
        </div>
    );
}
