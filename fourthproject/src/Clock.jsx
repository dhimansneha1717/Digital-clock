// import React from 'react'
import { useState } from 'react';

const Clock = () => {
    const currenttime= new Date().toLocaleTimeString();
    const [time, setTime ] = useState(currenttime); //initial state of time is the current time.

    const update = () => {
        const currenttime = new Date().toLocaleTimeString();
        setTime(currenttime);
    }
    setInterval(()=> {
        update()
     }, 1000);  //update every second to keep track of time.

   

  return (

  
       <div className="datetime">
        <div className="time">
        <h1>{time} </h1>  
        </div>
        </div>

  )
}

export default Clock
