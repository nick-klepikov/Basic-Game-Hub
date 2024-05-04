import React from 'react';
import "../style/myApp.css"
import Cell from "./Cell";

const Board = (props) => {

    let {cells, handleClick, rows, cols} = props;

    return (
        <div className="board" style={{gridTemplate: `repeat(${rows}, 1fr) / repeat(${cols}, 1fr)`}}>
            {cells.map(cell => <Cell
                                key={cell.id}
                                cell={cell}
                                handleClick={handleClick}
            />)}
        </div>
    );
};

export default Board;