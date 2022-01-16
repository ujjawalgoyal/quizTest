import React from 'react';

let Result = (props) => {
    return (
        <div>
            <h1>Your Final Score is</h1>
            <h3 style={{fontSize: "40px"}}>{props.resultValue.value}</h3>
        </div>
    );
}

export default Result;
