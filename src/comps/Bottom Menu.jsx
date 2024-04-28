import React, {useState} from 'react';
import "../style/myApp.css"

const BottomMenu = (props) => {

    let {isRestartButtonClicked, setIsRestartButtonClicked, isGameOver} = props;

    return (
        <div>
            <button className="startButton" onClick={() => setIsRestartButtonClicked(true)}>
                {!isGameOver ? "Restart" : "Start"}
            </button>
        </div>
    );
};

export default BottomMenu;