import React from 'react';
const ValidationComponent = (props) => {

    const style = {
        backgroundColor: "#eee",
        width: "40%",
        margin: "auto"
    }
    return (
     
        <div style = {style}>
            <h4>This is the validation component</h4>
            <p> {props.info}</p>
        
        </div>
    )
}
export default ValidationComponent;