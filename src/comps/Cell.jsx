import React from 'react';
import "../style/myApp.css"

const Cell = (props) => {

    let {cell, handleClick} = props;

    return (
        <button className="cell" onClick={(event) => handleClick(event, cell.id)}>
            {cell.curState ? cell.value : "?"}
        </button>
    );
};

export default Cell;