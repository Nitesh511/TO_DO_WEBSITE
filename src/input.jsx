import React, { useState } from "react";



const Input=()=>{

    const[newmsg, setmsg]=useState();

    const updateMessage=(event)=>{
        console.log(event.target.value);
        setmsg(event.target.value);
        

    }


    return(


        <>
        <div className="Form" style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
        <h1>Your Name Is:{newmsg}</h1>
        <span style={{position:'relative',marginTop:'100px',right:'180px'}}><input type="text" placeholder="Type Your Name"  onChange={updateMessage}></input></span>
        <span style={{position:'relative',marginTop:'100px',right:'180px'}}><button onClick={alert('Clicked')}>Click Me</button></span>
        </div>
            
        </>
    )


}

export default Input