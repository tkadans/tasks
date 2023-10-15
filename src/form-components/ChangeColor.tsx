import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    const boxStyle = { backgroundColor: color };
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="red"
                label="red"
                style={{ backgroundColor: "red" }}
                onChange={updateColor}
                checked={color === "red"}
            ></Form.Check>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="orange"
                label="orange"
                style={{ backgroundColor: "orange" }}
                onChange={updateColor}
                checked={color === "orange"}
            ></Form.Check>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="yellow"
                label="yellow"
                style={{ backgroundColor: "yellow" }}
                onChange={updateColor}
                checked={color === "yellow"}
            ></Form.Check>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="green"
                label="green"
                style={{ backgroundColor: "green" }}
                onChange={updateColor}
                checked={color === "green"}
            ></Form.Check>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="cyan"
                label="cyan"
                style={{ backgroundColor: "cyan" }}
                onChange={updateColor}
                checked={color === "cyan"}
            ></Form.Check>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="blue"
                label="blue"
                style={{ backgroundColor: "blue" }}
                onChange={updateColor}
                checked={color === "blue"}
            ></Form.Check>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="purple"
                label="purple"
                style={{ backgroundColor: "purple" }}
                onChange={updateColor}
                checked={color === "purple"}
            ></Form.Check>
            <Form.Check
                inline
                type="radio"
                name="colors"
                value="magenta"
                label="magenta"
                style={{ backgroundColor: "magenta" }}
                onChange={updateColor}
                checked={color === "magenta"}
            ></Form.Check>
            <p>
                You have chosen&#160;
                <span data-testid="colored-box" style={boxStyle}>
                    {color}
                </span>
            </p>
        </div>
    );
}
