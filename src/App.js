import { useState } from 'react';
import './index.css'

function App() {

  const [value, setValue] = useState('')
  var fontSize = 40 + "px"

  if (value.length > 10) {
    fontSize = 30 + "px"
  }

  if (value.length > 15) {
    fontSize = 22 + "px"
  }

  if (value.length > 20) {
    fontSize = 16 + "px"
  }

  return (
    <div className="container">
      <div className='calculator'>
        <form action='#'>
          <div className='display'>
            <input type='text' value={value} style={{ fontSize: fontSize }} />
          </div>

          <div>
            <input type='button' value='AC' onClick={e => setValue("")} />
            <input type='button' value='DE' onClick={e => setValue(value.length > 1 ? value.slice(0, -1) : '')} />
            <input type='button' value='.' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='/' onClick={e => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type='button' value='7' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='8' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='9' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='*' onClick={e => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type='button' value='4' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='5' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='6' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='+' onClick={e => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type='button' value='1' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='2' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='3' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='-' onClick={e => setValue(value + e.target.value)} />
          </div>

          <div>
            <input type='button' value='00' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='0' onClick={e => setValue(value + e.target.value)} />
            <input type='button' value='=' className='equal' onClick={e => setValue(value.length > 0 ? eval(value) : '')} />
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
