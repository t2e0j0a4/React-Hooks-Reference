import React from 'react'
import {useRef , useState} from 'react';

const UseRef = () => {
    const input = useRef(null);
    // useRef dosent re render when ever a state changes
    const [inputEle , setInputEle] = useState('')
    const  handleSubmit = (e) => {
        e.preventDefault();
        setInputEle(input.current.value);
    }
  return (
    <div className='p-10'>
        <h1 className='m-10'>useRef Hook</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className='m-10'>Enter Something : </label>
            <input className='m-10' type="text" name="Name" id="name" ref={input}/>
            <button type="submit" className='m-10 '>Get</button>
        </form>
        <h2 className='m-10'>{`Hey! ${inputEle}`}</h2>
    </div>
  )
}

export default UseRef