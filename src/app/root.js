import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="App">
            <h1>Spotilizer</h1>
            <Outlet />
        </div>

    )
}