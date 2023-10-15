import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Label>Answer</Form.Label>
            <Form.Select
                value={answer}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    setAnswer(event.target.value)
                }
            >
                <option value={options[0]}> {options[0]}</option>
                <option value={options[1]}> {options[1]}</option>
                <option value={options[2]}> {options[2]}</option>
            </Form.Select>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
