import React from 'react'
// Import useState Hook from react
import {useState , useContext} from 'react';
import StateContext from './ContextAPI/Context';

const UseState = () => {
    const [input,setInput] = useState('');
    const context = useContext(StateContext);
    const {user1 , user2} = context;
  return (
    <div className='p-10'>
        <h1 className='m-10'>useState Hook</h1>
        <form>
            <label htmlFor="name" className='m-10'>Enter Something : </label>
            <input className='m-10' type="text" name="Name" id="name" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        </form>
        <h2 className='m-10'>{`Hey! ${input}`}</h2>
        <h1 className='m-10'>{user1.name} {user1.age}<br/>{user2.name} {user2.age}</h1>
    </div>
  )
}

export default UseState