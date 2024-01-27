import React, { useState } from "react";
import "./todo.css";
import ToList from "./todoli";

const TODO = () => {
  const [input, SetInput] = useState("");
  const [items, Setitems] = useState([]);

  const itemEvent = (event) => {
    SetInput(event.target.value);
  };

  const list = () => {
    Setitems((oldItems) => {
      return [...oldItems, input];
    });

    SetInput("");
  };
  const deleteItems=(id)=>{
    Setitems((oldItems)=>{
        return oldItems.filter((arryEle,index)=>{
            return index !==id;

        })
    })
        
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <h1>TODO List</h1>
          <br />
          <input type="text" placeholder="add Items" onChange={itemEvent} />
          <button onClick={list}>+</button>

          <ol>
            {items.map((value, index) => {
              return <ToList key={index} id={index} value={value} 
                onSelect={deleteItems}
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TODO;
