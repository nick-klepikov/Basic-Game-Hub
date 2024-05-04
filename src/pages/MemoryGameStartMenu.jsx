import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../comps/Header";
const MemoryGameStartMenu = (props) => {

    let {rows, cols, handleRowsChange, handleColsChange, setIsGameSettingsSet} = props;

    let title = "Memory Game Menu";

    return (

        <div className="d-flex flex-column align-items-center vw-100 vh-100">
            <Header title={title}/>
            <div className="d-flex flex-column vh-100 justify-content-center">
                <h3 style={{color: "whitesmoke"}}>Set the size of board</h3>
                <div className="d-flex align-items-center justify-content-center mb-2">
                    <select className="form-select me-2 w-50" aria-label="number-of-rows" required
                            onChange={(event) => handleRowsChange(+event.target.value)}>
                        <option value={0}>Rows</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>

                    <span>X</span>

                    <select className="form-select ms-2 w-50" aria-label="number-of-cols" required
                            onChange={(event) => handleColsChange(+event.target.value)}>
                        <option value={0}>Cols</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>

                <div>
                    {!!(rows * cols % 2) || !(rows * cols) ?
                        <button className="startgamebutton" disabled>Start Game</button>
                        :
                        <button className="startgamebutton startgamebuttonhover" onClick={() => setIsGameSettingsSet(true)}>Start Game</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default MemoryGameStartMenu;