import './Calculator.css';
import { useState } from 'react';
import { Link} from "react-router-dom";

const Calculator = () => {
  const [result, setResult] = useState('');

  // set values to be calculated
  const handleClick = (e) => {
    setResult(result + e.target.value);
    
    // If current display is result, clear screen and start afresh
    if (result.slice(0, 1) === '=') {
      setResult(e.target.value);
    }else if(result === 'Error'){
      setResult(e.target.value);
    }
  }

  // Get input on keyboard
  const handleTyping = (e) => {
    setResult(e.target.value);
  }

  // Delete input
  const del = () => {
    setResult(result.slice(0, -1));
  }

  // Clear screen
  const clear = () => {
    setResult('');
  }

  // Get result
  const calculate = () => {
    try {
      // If current display is not "error", then evaluate
      if(result !== 'Error'){
        // eslint-disable-next-line
        setResult('= ' + eval(result).toString());        
      }
    } catch (error) {
      setResult('Error');
    }
   
  }

  return ( 

    <div className='container'>
      <form>
        <input type='text' value={result} onChange={handleTyping} focus="true" />
      </form>

      <div className='keypad' >
      <button className='highlight' onClick={clear} id='clear' >Clear</button>
      <button className='highlight' onClick={del} id='del' >Del</button>
      <button className='highlight' onClick={handleClick} value='/'>&divide;</button>
      <button onClick={handleClick} value='7'>7</button>
      <button onClick={handleClick} value='8'>8</button>
      <button onClick={handleClick} value='9'>9</button>
      <button className='highlight' onClick={handleClick} value='*'>&times;</button>
      <button onClick={handleClick} value='4'>4</button>
      <button onClick={handleClick} value='5'>5</button>
      <button onClick={handleClick} value='6'>6</button>
      <button className='highlight' onClick={handleClick} value='-'>&ndash;</button>
      <button onClick={handleClick} value='1'>1</button>
      <button onClick={handleClick} value='2'>2</button>
      <button onClick={handleClick} value='3'>3</button>
      <button className='highlight' onClick={handleClick} value='+'>+</button>
      <button onClick={handleClick} value='0'>0</button>
      <button onClick={handleClick} value='.'>.</button>
      <button className='highlight' onClick={calculate} id='result' >=</button>
      </div>     
      {/* footer */}
      <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </div>

  );
}

export default Calculator;
