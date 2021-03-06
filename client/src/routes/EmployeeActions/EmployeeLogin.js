//essentially -> similar to log in
import React, {useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
function EmployeeLogin(){
    const form = useRef();
    const checkBtn = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const [employeeAcc, setEmployeeAcc] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = '/employee-profile';
        navigate(path);
    }

    const handleEmployeeAccChange = (event) => {
        setEmployeeAcc(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    function handleEmployeeLogin(event) {
        event.preventDefault();
        console.log("handled employee login");

        axios.post("http://127.0.0.1:5000/employee-login", {
            employee_account: employeeAcc,
            password: password
        }).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                navigate('/employee-profile');
            } else {
                alert("Wrong account or password.");
            }
        }).catch(function (error) {
            console.log(error);
            alert(error);
        });

        //JWT token -> validation -> uncomment later

        // setMessage("");
        // setLoading(true);
        // form.current.validateAll();
        //
        // if (checkBtn.current.context._errors.length === 0) {
        //     AuthService.login(employeeId, password).then(
        //         () => {
        //             navigate("/records");
        //             window.location.reload();
        //         },
        //         (error) => {
        //             const resMessage =
        //                 (error.response && error.response.data && error.response.data.message)
        //                 || error.message || error.toString();
        //             setLoading(false);
        //             setMessage(resMessage);
        //         }
        //     );
        // } else {
        //     setLoading(false);
        // }
    }


    return (
        <div className="container">
            <h1>Log in (Employee)</h1>
            <h3>We're honored to have you has part of our company.</h3>
            <br/>
            <Form onSubmit={handleEmployeeLogin} name = "information">
                <div className="input-container">
                    <label>Employee Account</label>
                    <Input onChange = {handleEmployeeAccChange} type="text"
                           placeholder="Employee Account Name" defaultValue={employeeAcc}
                           validations={[required]} />
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <Input onChange = {handlePasswordChange} type="password"
                           placeholder="Password" defaultValue={password}
                           validations={[required]} />
                </div>

                <button onClick={routeChange}>Log in</button>
                {/*<div className="form-group">*/}
                {/*    <button disabled={loading}>*/}
                {/*        {loading && (*/}
                {/*            <span className="spinner-border spinner-border-sm"></span>*/}
                {/*        )}*/}
                {/*        <span>Log in</span>*/}
                {/*    </button>*/}
                {/*</div>*/}
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>

        </div>
    );
}

export default EmployeeLogin;