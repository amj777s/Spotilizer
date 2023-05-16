import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { selectAccessToken, getToken } from "../../../features/userProfile/userProfileSlice";


export default function Authorized() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const access_token = useSelector(selectAccessToken);

    useEffect(() => {
        if(!access_token){
            dispatch(getToken());
        }
    }, []);

    //solves Cannot update a component (`RouterProvider`) while rendering a different component (`Authorized`) error
    useEffect(() => {
        if (access_token) {
            navigate('/user')
        }
    }, [access_token]);
    

    
    
    return (
        <div>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            <p>Authorizing...</p>
        </div>
    )

}