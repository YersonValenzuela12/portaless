import {useState} from 'react';
import './conter.css';
export const Counter = ({value}) => {
  const [count, setCount] = useState(value);
  const restar= () =>{
    //setCount(count - 1);
    count > 0 && setCount(count - 1);
  }
  const sumar= () =>{
    setCount(count + 1);
  }
  
  const reset= () =>{
    setCount(value);
  }
  return (
    <div>
      <h1 className='counter-container'>Counter</h1>
      <p>{count}</p>
      <button onClick={(restar) => setCount(count- 1)}>-1</button>
      <button onClick={(sumar) => setCount(count + 1)}>+1</button>
      <button onClick={(reset) => setCount(value)}>Reset</button>
      
    </div>
  );

}
export default Counter;