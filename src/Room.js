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
  let[age, setAge] = useState(30);

  function updateLight(){
    console.log("Light button clicked");
    setLit(!isLit);
  }

  return (
    // Simple
    // <div className="room dark">

    // Change css class dynamically - Concatenation
    // <div className={"room " + (isLit? "lit": "dark")}>

    // Change css class dynamically - Method Name: Template String
    <div className={`room ${isLit? "lit": "dark"}`}>
        This light in the Room is {isLit ? "ON": "OFF"}
        <br />
        Age : {age}
        <br />
        <button onClick={updateLight}>Toggle Light</button>
        <br />
        <button onClick={() => {
          console.log("Age button clicked");
          setAge(++age);}}>Toggle Age</button>
    </div>
  );
}

export default Room;
