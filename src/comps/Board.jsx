import React from 'react';
import "../style/myApp.css"
import Cell from "./Cell";

const Board = (props) => {

    let {cells, handleClick} = props;

    return (
        <div className="board">
            {cells.map(cell => <Cell
                                key={cell.id}
                                cell={cell}
                                handleClick={handleClick}
            />)}
        </div>
    );
};

export default Board;