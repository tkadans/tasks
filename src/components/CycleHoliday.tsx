import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎄" | "🎃" | "🐲" | "🦃" | "🐰";
    const [holiday, setHoliday] = useState<Holiday>("🐲");
    function cycleAlphabetically(): void {
        if (holiday == "🐲") {
            setHoliday("🎄");
        } else if (holiday == "🎄") {
            setHoliday("🐰");
        } else if (holiday == "🐰") {
            setHoliday("🎃");
        } else if (holiday == "🎃") {
            setHoliday("🦃");
        } else {
            setHoliday("🐲");
        }
    }
    function cycleInOrder(): void {
        if (holiday == "🐲") {
            setHoliday("🐰");
        } else if (holiday == "🐰") {
            setHoliday("🎃");
        } else if (holiday == "🎃") {
            setHoliday("🦃");
        } else if (holiday == "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("🐲");
        }
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={cycleAlphabetically}>Change Alphabet</Button>
            <Button onClick={cycleInOrder}>Change Year</Button>
        </div>
    );
}
