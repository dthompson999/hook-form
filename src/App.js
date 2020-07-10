import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import Results from './components/Results'

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPW: "",
  });
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      <Results data={state}/>
    </div>
  );
}

export default App;
