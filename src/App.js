import './App.css';
import { useState } from 'react'

function App() {
  const [age, setage] = useState('')
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)

  function calculate(e){
    e.preventDefault()
    const Upper = (220-age) * 0.85
    const Lower = (220-age) * 0.65
    setUpper(Upper)
    setLower(Lower)
  }
  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Age</label>
          <div>
          <input value={age} onChange={e => setage(e.target.value)}/>
        </div>
        </div>
        <div>
          <label>Heart rate limits</label>
          </div>
          <div>
          <output>{lower.toFixed(0)}-{upper.toFixed(0)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
   
  );
}

export default App;
