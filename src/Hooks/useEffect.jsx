import React from 'react'
import {useState , useEffect} from 'react';
import {BsGithub} from 'react-icons/bs'

const API = "https://api.github.com/users";

const UseEffect = () => {
    const [data,setData] = useState([]);

    const fetchingData = async () => {
        const response = await fetch(API);
        const Data = await response.json();
        setData(Data);
    }

    useEffect(() => {
      fetchingData();
    }, []) // Dependency Array Will only render when page loads.
    

  return (
    <div className='p-10'>
        <h1>useEffect Hook</h1>
        {/* Best use case of using useEffect Hook is Fetching Data from an external API */}
        <div className="box-row m-10">
        {data.map((each)=>{
            const {id,login,html_url} = each;
            return(
                <div key={id} className='box-col m-10 p-10' style={{border:"1px solid black"}}>
                    <h1 className='m-10'>{login}</h1>
                    <a className='m-10' target="_blank" rel='noreferrer' href={html_url} style={{color: 'black'}}><BsGithub/></a>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default UseEffect