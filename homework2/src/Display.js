import React from 'react';

const Display = ({number, setNumber}) => {
    return (
        <div style={{fontSize: "3rem", color: "green"}}>
            {number}
        </div>
    );
};

export default Display;