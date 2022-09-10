import React,{useContext} from 'react'
import TimeContext from './Context/TimeContext'

const Example1 = () => {
    const context = useContext(TimeContext);
    const {count , increment , decrement} = context;
    const change = (type) => {
        if (type === 'increment'){
            increment();
        }
        else {
            decrement();
        }
    }
  return (
    <div style={{display: 'flex', alignItems: 'center' , width: '100%'}}>
        <button style={{padding : '5px 10px',cursor: 'pointer' , margin:'5px'}} type="button" onClick={()=>change("decrement")}>&darr;</button>
        <h1>{count}</h1>
        <button style={{padding : '5px 10px',cursor: 'pointer' , margin:'5px'}} type="button" onClick={()=>change("increment")}>&uarr;</button>
    </div>
  )
}

export default Example1