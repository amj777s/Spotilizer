import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectAccessToken } from "../features/userProfile/userProfileSlice";
import Login from "../features/login/login";

export default function Root() {
    
    let access_token = useSelector(selectAccessToken);
    
    return (
        <div className="App">
            <h1>Spotilizer</h1>
            {/* redirects to /users after user accepts scope */}
            {!access_token && <Login /> }
            <Outlet />
        </div>

    )
}