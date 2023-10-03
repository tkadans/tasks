import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftValue, setLeftValue] = useState(1);
    const [rightValue, setRightValue] = useState(6);
    const [gameStatus, setGameStatus] = useState("ongoing");
    function rollLeft(): void {
        const newValue = d6();
        setLeftValue(newValue);
        checkOutcome(newValue, rightValue);
    }
    function rollRight(): void {
        const newValue = d6();
        setRightValue(newValue);
        checkOutcome(leftValue, newValue);
    }
    function checkOutcome(left: number, right: number): void {
        if (left == right && left != 1) {
            setGameStatus("win");
        } else if (left == 1 && right == 1) {
            setGameStatus("lose");
        } else {
            setGameStatus("ongoing");
        }
    }
    return (
        <div>
            {gameStatus === "win" ? (
                <span>Win</span>
            ) : gameStatus === "lose" ? (
                <span>Lose</span>
            ) : null}
            <span data-testid="left-die">{leftValue}</span>
            <span data-testid="right-die">{rightValue}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
        </div>
    );
}
