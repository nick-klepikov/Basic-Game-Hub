import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const MemoryGameStartMenu = () => {
    return (

        <div className="d-flex flex-column align-items-center vw-100 vh-100">
            <h1 style={{color: "whitesmoke"}}>Memory Game Menu</h1>
            <div className="d-flex flex-column vh-100 justify-content-center">
                <h3 style={{color: "whitesmoke"}}>Set the size of board</h3>

                <div className="d-flex align-items-center justify-content-center mb-2">
                    <select className="form-select me-2 w-50" aria-label="number-of-rows" required>
                        <option selected>Rows</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>

                    <span>X</span>

                    <select className="form-select ms-2 w-50" aria-label="number-of-cols" required>
                        <option selected>Cols</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>

                <div>
                    <button className="startgamebutton">Start Game</button>
                </div>
            </div>
        </div>


    );
};

export default MemoryGameStartMenu;