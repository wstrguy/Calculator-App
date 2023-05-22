import { useState } from 'react'

function App() {
  const [result, setResult] = useState('')

  // Handle each click
  const handleClick =(e) => {
    setResult(result.concat(e.target.name));
  };

  // Handle clear Button
  const handleClear = () => {
    setResult('');
  };

  // Handle backspace
  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };

  // Handle Calculate
  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    };
  };

  // Handle +/-
  const handlePlusMinus =() => {
    if (result !== '') {
      if (result[0] === '-') {
        setResult(result.slice(1));
      } else {
        setResult('-' + result);
      }
    };
  };

  // Handle %
  const handlePercentage = () => {
    if (result !== '') {
      const resultValue = parseFloat(result);
      const percentage = (resultValue / 100).toString();
      setResult(percentage);
    }
  };

  return(
  <div className='flex flex-col items-center justify-center h-screen'>
    <div className='bg-gray-800 rounded-md p-4 text-white'>
      <div className='mb-4 text-2xl'>{result}</div>
        <div className='grid grid-cols-4 gap-2'>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClear}>AC</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleBackSpace}>C</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handlePercentage} name='%'>%</button>
          <button className='bg-green-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='/'>/</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='7'>7</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='8'>8</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='9'>9</button>
          <button className='bg-green-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='*'>x</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='4'>4</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='5'>5</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='6'>6</button>
          <button className='bg-green-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='-'>-</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='1'>1</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='2'>2</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick}name='3' >3</button>
          <button className='bg-green-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='+'>+</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handlePlusMinus} name='-'>+/-</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='0'>0</button>
          <button className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md' onClick={handleClick} name='.'>.</button>
          <button className='bg-green-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md' onClick={handleCalculate}>=</button>

        </div>
      </div>
  </div>) 
}

export default App
