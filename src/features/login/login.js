import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

export default function Login() {
    return (
        <div>
            <p>welcome to Spotilizer. login to view user stats and features</p>
            <Link to={routes.homeRoute()}>Login</Link>
        </div>
    )
}