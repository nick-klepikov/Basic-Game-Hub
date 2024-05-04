import React from 'react';
import Header from "../comps/Header";

const TicTacToe = () => {
    let title = "TicTacToe";

    return (
        <div className="d-flex flex-column align-items-center vw-100">
            <Header title={title}/>
        </div>
    );
};

export default TicTacToe;
