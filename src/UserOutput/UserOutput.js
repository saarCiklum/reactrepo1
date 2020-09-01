import React from 'react';
const style = {
    backgroundColor: '#ccc',
    width: '30%',
    padding: '16px',
    margin: 'auto'

}
const UserOutput = (props) => {
    return (
        <div style = {style}>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    );
}
export default UserOutput;