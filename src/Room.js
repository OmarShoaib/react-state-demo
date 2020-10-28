import React, {useState} from 'react';
import './Room.css';

function Room(props) {
  // const[isLit, setLit] = React.useState(true);
  // Destructuring of Array
  // useState is a hook
  // it return an array
  // isLit is variable
  // setLit is function 
  const[isLit, setLit] = useState(props.status);
  let[temp, setTemp] = useState(22);

  return (
    // Simple
    // <div className="room dark">

    // Change css class dynamically - Concatenation
    // <div className={"room " + (isLit? "lit": "dark")}>

    // Change css class dynamically - Method Name: Template String
    <div className={`room ${isLit? "lit": "dark"}`}>
        This light in the Room is {isLit ? "ON": "OFF"}
        <br /><br />
        <button className="btn" onClick={() => {setLit(true)}}>LIGHTS ON</button>
        &nbsp;&nbsp;
        <button className="btn" onClick={() => {setLit(false)}}>LIGHTS OFF</button>
        <br /><br /><br />
        Room Temperature : {temp}°C
        <br /><br />
        <button className="btn" onClick={() => {setTemp(++temp)}}>TEMP +</button>
        &nbsp;&nbsp;
        <button className="btn" onClick={() => {setTemp(--temp)}}>TEMP -</button>
    </div>
  );
}

export default Room;
