import React from 'react';
import '../UserInput/UserInputStyle.css';
const userInput = (props) => {
    return (
    <div className="inputcard">
    <label>Enter UserName:</label>
    <input type="text" value = {props.nameProp} onChange = {props.changeName}></input>
    </div>
    )
}
export default userInput;