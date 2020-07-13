import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'

function App() {

  const [newUser, setNewUser] = useState([]);
  
  const addUser = (data) => {
    setNewUser([...newUser, data]);
  }

  return (
    <div className="App">
      <Form newUser={ addUser } />
    </div>
  );
}

export default App;
