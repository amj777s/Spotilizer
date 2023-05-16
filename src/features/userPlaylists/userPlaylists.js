import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserPlaylists() {
    const navigate = useNavigate();
    
    return (
        <button onClick={()=> navigate('/user')}>to user</button>
    )
}