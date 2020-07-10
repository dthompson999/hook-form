import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {
    const { inputs, setInputs } = props;
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPW, setConfirmPW] = useState("");

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        // e.preventDefault();
        // props.newUser({firstName, lastName, email, password});
        // setFirstName("");
        // setLastName("");
        // setEmail("");
        // setPassword("");
        // setConfirmPW("");
    };


    return (
        <div class="mx-auto mt-5" style={{width: '500px'}}>
            <div class="card border-primary mb-3" style={{width: '32rem'}}>
                <div class="text-center">
                    <h5 class="card-header bg-dark text-white">Register</h5>
                </div>
                <div class="card-body text-white bg-secondary">
                    <form onSubmit = { onChange }>
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >First Name</label>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" name="firstName" onChange={onChange} />
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-7 text-danger bg-dark mb-2">
                                    <span asp-validation-for="FirstName"></span>
                                </div>
                            </div> */}
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Last Name</label>
                                </div>
                                <div class="col-5">
                                    <input type="text" class="form-control" name="lastName" onChange={onChange} />
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-7 text-danger bg-dark mb-2">
                                    <span asp-validation-for="LastName"></span>
                                </div>
                            </div> */}
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Email Address</label>
                                </div>
                                <div class="col-7">
                                    <input type="email" class="form-control" name="email" onChange={onChange} />
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-7 text-danger bg-dark mb-2">
                                    <span asp-validation-for="Email"></span>
                                </div>
                            </div> */}
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Password</label>
                                </div>
                                <div class="col-5">
                                    <input type="password" class="form-control" name="password" onChange={onChange} />
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-5 text-danger bg-dark mb-2">
                                    <span asp-validation-for="Password"></span>
                                </div>
                            </div> */}
                            <div class="row">
                                <div class="col-4">
                                    <label class="form-group mt-2" >Confirm Password</label>
                                </div>
                                <div class="col-5">
                                    <input type="password" class="form-control" name="confirmPW" onChange={onChange} />
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col-4">
                                </div>
                                <div class="col-7 text-danger bg-dark mb-2">
                                    <span asp-validation-for="ConfirmPW"></span>
                                </div>
                            </div> */}
                            <button type="submit" class="btn btn-primary border-dark">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default Form;