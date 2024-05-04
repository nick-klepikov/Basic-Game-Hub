import React from 'react';
import "../style/myApp.css"

const BottomMenu = (props) => {

    let {tries, setIsRestartButtonClicked, isGameOver} = props;

    return (
        <div className="bottomMenu" style={{color: "whitesmoke"}}>
            {
                isGameOver ?
                    <div className="winnerNotification">You won in {tries} steps!</div>
                    :
                    <div className="triesCounter">Current tries: {tries}</div>
            }


            <button className="startButton restartbutton" onClick={() => setIsRestartButtonClicked(true)}>
                {!isGameOver ? "Restart" : "Start Over"}
            </button>
        </div>
    );
};

export default BottomMenu;