import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);
    function startQuiz(): void {
        setAttempts(attempts - 1);
        setInProgress(inProgress == false ? true : false);
    }
    function stopQuiz(): void {
        setInProgress(inProgress == true ? false : true);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts == 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <span>{attempts}</span>
        </div>
    );
}
