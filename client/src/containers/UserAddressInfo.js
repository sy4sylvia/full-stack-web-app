import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";


export default function UserAddressInfo() {
    //only note down address for individual customers
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [address, setAddress] = useState({
        street: "",
        apt:"",
        city:"",
        state:"",
        country:"",
        zipcode:""
    });

    const handleAddressChange = (event) => {
        setAddress((prevalue) => {
            return {
                ...prevalue,
                [event.target.name]: event.target.value
            }
        })
    };

    function handleClick(event) {
        event.preventDefault();
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/register';
        navigate(path);
    };

    function handleSaveAddressInfo(event) {
        alert("address information submitted successfully.");
        event.preventDefault();

        //not working
        // useEffect(() => {
        //     fetch("https://api.example.com/items")
        //         .then(res => res.json())
        //         .then(
        //             (result) => {
        //                 setIsLoaded(true);
        //                 setAddress(result);
        //             },
        //
        //             (error) => {
        //                 setIsLoaded(true);
        //                 setError(error);
        //             }
        //         )
        // }, [])
        //
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
        //     return (
        //         <ul>
        //             {address.map(singleAddress => (
        //                 <li key={singleAddress.id}>
        //                     {singleAddress.street}
        //                     {singleAddress.apt}
        //                     {singleAddress.city}
        //                     {singleAddress.state}
        //                     {singleAddress.country}
        //                     {singleAddress.zipCode}
        //                 </li>
        //             ))}
        //         </ul>
        //     );
        // }


    }


    return (
        <div className>
            <br />
            <h2>Address Book</h2>
            <h3>Let's start with filling out your address information.</h3>
            <br />
            <form onSubmit={handleClick} name = "address">
                <div className="input-container">
                    <label>Street</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Street" defaultValue={address.street} />
                </div>

                <div className="input-container">
                    <label>Apt/Unit</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Unit(optional)" defaultValue={address.apt} />
                </div>

                <div className="input-container">
                    <label>City</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="City" defaultValue={address.city} />
                </div>

                <div className="input-container">
                    <label>State</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="State" defaultValue={address.state} />
                </div>

                <div className="input-container">
                    <label>Country</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Country" defaultValue={address.country} />
                </div>

                <div className="input-container">
                    <label>Zipcode</label>
                    <input className = "input-form-box" onChange = {handleAddressChange} type="text" placeholder="Zipcode" defaultValue={address.zipcode} />
                </div>
                <button onClick={handleSaveAddressInfo}>Submit Address Information</button>
            </form>

        </div>
    );
}