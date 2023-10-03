import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // Initialize dhValue with 0

    const handleDoubleClick = () => {
        setDhValue(2 * dhValue); // Double the value
    };

    const handleHalveClick = () => {
        setDhValue(0.5 * dhValue); // Halve the value
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={handleDoubleClick}>Double</Button>
            <Button onClick={handleHalveClick}>Halve</Button>
        </div>
    );
}
