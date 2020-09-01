import React from 'react';
import charoutput from '../CharComponent/charoutput.css';
const Charoutput = (props) => {
 return (
     <div className="outputblock" onClick={props.clicked.bind(this, props.index)}>
         <h1>{props.letter}</h1>
     </div>
 )
}
export default Charoutput;