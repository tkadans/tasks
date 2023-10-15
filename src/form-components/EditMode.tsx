import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [answer, setAnswer] = useState<string>("Your Name");
    const [studentStatus, setStatus] = useState<boolean>(true);
    const [editMode, setMode] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Label>Toggle Edit</Form.Label>
            <Form.Check
                type="switch"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setMode(event.target.checked)
                }
            ></Form.Check>
            {editMode && (
                <Form.Group>
                    <Form.Label>Edit Student</Form.Label>
                    <Form.Check
                        aria-label="student"
                        type="checkbox"
                        checked={studentStatus}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStatus(event.target.checked)}
                    ></Form.Check>
                    <Form.Control
                        value={answer}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAnswer(event.target.value)}
                    ></Form.Control>
                </Form.Group>
            )}
            {studentStatus
                ? answer + " is a student"
                : answer + " is not a student"}
        </div>
    );
}
