import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAccessToken,  getToken, getUser, selectUserInfo } from "./userProfileSlice";

export default function UserProfile(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector(selectAccessToken);
    const userInfo = useSelector(selectUserInfo);

    //wrap dispatch in a conditional(like if user info not blank) to stop from rendering on every call
    //initially get top artists in the short term to display in carousel
    useEffect(()=> {
        if(Object.keys(userInfo).length === 0){
            dispatch(getUser(accessToken));
        }
    },[]);



    return (
        <div>
        <h1>{userInfo.display_name || <Skeleton count={5} /> }</h1>
        <button onClick={()=> navigate('/playlists')}>playlists</button>
        </div>
        
    )
}