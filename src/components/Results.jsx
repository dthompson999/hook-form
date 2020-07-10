import React from 'react';

const Results = (props) => {
    const {firstName, lastName, email, password, confirmPW} = props.data;
    return (
        <div class="mx-auto mt-5" style={{width: '500px'}}>
            <div className="col">
            <h3>Your Form Data</h3>
                <ul className="list-group">
                    <li className="list-group-item">First Name: {firstName}</li>
                    <li className="list-group-item">Last Name: {lastName}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Password: {password}</li>
                    <li className="list-group-item">Confirm PW: {confirmPW}</li>
                </ul>
            </div>
        </div>
    );
}

export default Results;