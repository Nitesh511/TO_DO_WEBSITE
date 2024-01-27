import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let Time= new Date().toLocaleTimeString();

  const[curr,SetCurr]=useState(Time);


  const updateTime=()=>{
    const upTime= new Date().toLocaleTimeString();
    SetCurr(upTime);

  }
 

  return (
    <>
    <div className='image' style={{backgroundImage:'URL(https://cdn.mos.cms.futurecdn.net/HjrVVsTBP8FfZoErpbWn4F-1200-80.jpeg)',height:'100vh',width:'210vh'}}>
    <h1 style={{textAlign:'center',position:'absolute',right:'500px',top:"40%"}}>{curr}</h1>
    <button style={{color:'red',position:'relative',top:'60%',right:'-800px'}} onClick={updateTime}>Click Me</button>

    </div>

   

  
    </>
  )
}

export default App
