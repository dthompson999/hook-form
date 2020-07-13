import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Results from './Results'

const Form = (props) => {
    // const { inputs, setInputs } = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");

    // const onChange = (e) => {
    //     setInputs({
    //         ...inputs,
    //         [e.target.name]: e.target.value
    //     })


    const createUser = (e) => {
        e.preventDefault();
        props.newUser({firstName, lastName, email, password, confirmPW});
        setHasBeenSubmitted( true );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPW("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPW = (e) => {
        setConfirmPW(e.target.value);
        if(e.target.value !== password) {
            setConfirmPWError("Passwords must match!");
        } else {
            setConfirmPWError("");
        }
    };

    return (
        <div class="mx-auto mt-5" style={{width: '500px'}}>
            <div class="card border-primary mb-3" style={{width: '32rem'}}>
                <div class="text-center">
                    {
                        hasBeenSubmitted ?
                        <h5 class="card-header bg-dark text-white">Thank you for registering!</h5> :
                        <h5 class="card-header bg-dark text-white">Welcome, please fill out the form to sign up.</h5>
                    }
                </div>
                <div class="card-body text-white bg-secondary">
                    <form onSubmit = { createUser }>
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >First Name</label>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" name="firstName" onChange={ handleFirstName } value={firstName} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                </div>
                                    {
                                        firstNameError ?
                                        <div class="col-7 text-danger bg-dark mb-2">{firstNameError}</div> :
                                        ''
                                    }
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Last Name</label>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" name="lastName" onChange={ handleLastName } value={lastName} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                </div>
                                    {
                                        lastNameError ?
                                        <div class="col-7 text-danger bg-dark mb-2">{lastNameError}</div> :
                                        ''
                                    }
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Email Address</label>
                                </div>
                                <div class="col-7">
                                    <input type="email" class="form-control" name="email" onChange={ handleEmail } value={email} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                </div>
                                    {
                                        emailError ?
                                        <div class="col-7 text-danger bg-dark mb-2">{emailError}</div> :
                                        ''
                                    }
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Password</label>
                                </div>
                                <div class="col-5">
                                    <input type="password" class="form-control" name="password" onChange={ handlePassword } value={password} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                </div>
                                    {
                                        passwordError ?
                                        <div class="col-7 text-danger bg-dark mb-2">{passwordError}</div> :
                                        ''
                                    }
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Confirm Password</label>
                                </div>
                                <div class="col-5">
                                    <input type="password" class="form-control" name="confirmPW" onChange={ handleConfirmPW } value={confirmPW} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                </div>
                                    {
                                        confirmPWError ?
                                        <div class="col-7 text-danger bg-dark mb-2">{confirmPWError}</div> :
                                        ''
                                    }
                            </div>
                            <button type="submit" class="btn btn-primary border-dark">Sign Up</button>
                    </form>
                </div>
            </div>
            <Results firstName={firstName} lastName={lastName} email={email} password={password} confirmPW={confirmPW}/>
        </div>
    );

}
export default Form;