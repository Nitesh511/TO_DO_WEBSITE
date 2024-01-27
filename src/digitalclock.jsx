import React, { useState } from "react";

const Clock=()=>{

    const Time= new Date().toLocaleTimeString();

    const[newTimem , SetTime]=useState(Time);

    const updateTime=()=>{

        const newstr=new Date().toLocaleTimeString();
        SetTime(newstr);
    };

    setInterval(updateTime,1000)    

    return(
        <>

            <h1 style={{
                backgroundColor:"crimson",
                textAlign:'center',
                position:'relative',
                right:'-600px'

            }}>{newTimem}</h1>
        </>
    )



}

export default Clock