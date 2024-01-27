import React from "react";

const ToList=(props)=>{

   
    return(
        <>
        <div className="todo">
            <li>
            {props.value}
            </li>
            <span style={{position:'absolute',marginTop:'-35px'}}><i onClick={()=>{
                props.onSelect(props.id)
            }}>Delete</i></span>
        </div>

        </>
    )
}

export default ToList