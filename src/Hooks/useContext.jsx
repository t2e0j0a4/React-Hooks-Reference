import React from 'react'
import {useContext} from 'react'
import StateContext from './ContextAPI/Context'

const UseContext = () => {
    const context = useContext(StateContext);
    const {user1 , user2} = context;
  return (
    <div className='p-10'>
        <h1>useContext and ContextAPI</h1>
        <div className="p-10">
            <h1 className='m-10'>{user1.name + " - " + user1.age}</h1>
            <h2 className='m-10'>{user2.name + " - " + user2.age}</h2>
        </div>
    </div>
  )
}

export default UseContext