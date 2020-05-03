import React from 'react';
import './UserOutput.css'

const useroutput = ( props ) => {
    return(
        <div className="UserOutput">
            <p>The current user is {props.username} </p>
            <p>and your age is {props.age}</p>
        </div> 
    )
};

export default useroutput;