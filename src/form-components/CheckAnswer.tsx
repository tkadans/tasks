import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type x = "✔️" | "❌";
    const [current, setCurrent] = useState<string>("");
    const [emoji, setEmoji] = useState<x>("❌");

    function updateCurrent(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrent(event.target.value);
    }

    function updateEmoji() {
        if (current === expectedAnswer) {
            setEmoji("✔️");
        } else {
            setEmoji("❌");
        }
    }
    React.useEffect(() => {
        updateEmoji();
    }, [current, expectedAnswer]);

    return (
        <div>
            <Form.Group controlId="answer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={current} onChange={updateCurrent} />
            </Form.Group>
            {emoji}
        </div>
    );
}
