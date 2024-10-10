import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const Change = (event) => {
    setName(event.target.value);
  };
  const click = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter your name" 
        onChange={Change} 
      />
      <button onClick={click}>Submit</button>

      {submitted && name && <h1>Hello {name}!</h1>}
    </div>
  ); 
}

export default App;
