import {useState} from 'react';
import TimeContext from './TimeContext';

const Time = (props) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <TimeContext.Provider value={{count , increment , decrement}}>
            {props.children}
        </TimeContext.Provider>
    )
}

export default Time;