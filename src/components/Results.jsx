import React from 'react';

const Results = (props) => {

    return (
        <div class="mx-auto mt-5" style={{width: '500px'}}>
            <div className="col">
            <h3>Your Form Data</h3>
                <ul className="list-group">
                    <li className="list-group-item">First Name: {props.firstName}</li>
                    <li className="list-group-item">Last Name: {props.lastName}</li>
                    <li className="list-group-item">Email: {props.email}</li>
                    <li className="list-group-item">Password: {props.password}</li>
                    <li className="list-group-item">Confirm PW: {props.confirmPW}</li>
                </ul>
            </div>
        </div>
    );
}

export default Results;