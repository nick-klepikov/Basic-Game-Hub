import React from 'react';
import "../style/myApp.css"

const Cell = (props) => {

    let {cell} = props;
    console.log(cell)

    return (
        <div className="cell">
            {cell.value}
        </div>
    );
};

export default Cell;