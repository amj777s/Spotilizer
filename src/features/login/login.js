import React from "react";
import Spotify from "../../spotify/spotify";

export default function Login() {
    return (
        <div>
            <p>welcome to Spotilizer. login to view user stats and features</p>
            <button onClick={()=> Spotify.getSpotifyAuth()}>LOG IN </button>
        </div>
    )
}