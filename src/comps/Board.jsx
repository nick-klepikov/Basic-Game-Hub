import React from 'react';
import "../style/myApp.css"
import Cell from "./Cell";

const Board = (props) => {

    let {cells} = props;

    return (
        <div className="board">
            {cells.map(cell => <Cell
                                key={cell.id}
                                cell={cell}
            />)}
        </div>
    );
};

export default Board;