
import './App.css';
import { useState } from 'react';
import ValueDisplay from './ValueDisplay';

function App() {
const [value, setValue] = useState("")

const handleChange = (event) => {
  setValue(event.target.value)}
 

  return (
    <div className="App">
<h1> Current and previous value</h1>
      <input
      type='text'
      value={value}
      onChange={handleChange}
      placeholder='Some'/>
     
<ValueDisplay value={value}/>
      
    </div>
  );
  }

export default App;

