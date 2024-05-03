import React, {useState} from 'react';
import "../style/myApp.css"

const BottomMenu = (props) => {

    let {tries, setIsRestartButtonClicked, isGameOver} = props;

    console.log(isGameOver)

    return (
        <div className="bottomMenu">
            {
                isGameOver ?
                    <div className="winnerNotification">You won in {tries} steps!</div>
                    :
                    <div className="triesCounter">Current tries: {tries}</div>
            }


            <button className="startButton" onClick={() => setIsRestartButtonClicked(true)}>
                {!isGameOver ? "Restart" : "Start Over"}
            </button>
        </div>
    );
};

export default BottomMenu;