import React, {useState} from 'react';
import AuthService from "../services/auth.service";
import {useNavigate} from "react-router-dom";

function UserProfile(){

    let navigate = useNavigate();
    const routeChangeEditInfo = () =>{
        let path = '/user-profile-edit-info';
        navigate(path);
    }

    const routeChangeEditAddressInfo = () =>{
        let path = '/user-profile-edit-address';
        navigate(path);
    }

    const routeChangeEditCorporateInfo = () => {
        navigate('/corp-customer-edit-info');
    }

    const routeChangeViewOrder = () =>{
        let path = '/order-history';
        navigate(path);
    }

    const routeChangeViewCoupon = () =>{
        let path = '/order-history'; //->??
        navigate(path);
    }

    const logOut = () => {
        AuthService.logout();
        navigate('/login');
    }

    return (
        <div className="container">
            <h1>Customer Profile</h1>
            <h3></h3>
            <div>
                {/*information only available to individual customers*/}
                <button onClick={routeChangeEditInfo}>My Personal information</button>
            </div>
            <br />


            {/*<div>*/}
            {/*    /!*information only available to individual customers*!/*/}
            {/*    <button onClick={routeChangeEditCorporateInfo}>Corporate Information</button>*/}
            {/*</div>*/}
            {/*<br />*/}


            <div>
                <button onClick={routeChangeEditAddressInfo}>My address</button>
            </div>
            <br />

            <div>
                <button onClick={routeChangeViewOrder}>My orders</button>
            </div>
            <br />

            <div>
                <br />
                <button onClick={logOut} style={{width: "15%"}}>Log Out</button>
            </div>

        </div>
    );
}

export default UserProfile;